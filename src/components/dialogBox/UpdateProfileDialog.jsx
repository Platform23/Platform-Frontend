import {
    Button,
    Dialog,
    Card,
    CardBody,
    CardFooter,
    Typography,
    Input,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useUserProfile } from "../../hooks/useUserProfile";

const UpdateProfileDialog = ({ open, handleOpen, userId }) => {
    const { user, error, loading, updateUserProfile } = useUserProfile(userId);
    const [avatar, setAvatar] = useState(null);
    const [background, setBackground] = useState(null);
    const [formData, setFormData] = useState({
        fullName: '',
        profession: '',
    });

    useEffect(() => {
        if (user) {
            setFormData({
                fullName: user.fullName || '',
                profession: user.profession || ''
            });
        }
    }, [user]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const { name } = e.target;
        if (name === 'avatar') {
            setAvatar(file);
        } else {
            setBackground(file)
        }
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataForRequest = new FormData();
        for (const key in formData) {
            formDataForRequest.append(key, formData[key]);
        }

        if (avatar) {
            formDataForRequest.append("avatar", avatar);
        }

        if (background) {
            formDataForRequest.append("background", background);
        }

        await updateUserProfile(user.id, formDataForRequest);
        handleOpen();
    };

    if (loading) {
        return;
    }

    return (
        <>
            <Dialog
                size="lg"
                open={open}
                handler={handleOpen}
                className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
            >
                <Card className="mx-auto w-full max-w-[30rem]">
                    <CardBody className="flex flex-col gap-4">
                        <Typography variant="h4" className="text-primary font-semibold">
                            Editer profil
                        </Typography>

                        <Typography className="-mb-2" variant="h6">
                            Nom complet
                        </Typography>
                        <Input
                            placeholder="Nom complet"
                            size="lg"
                            name="fullName"
                            className="rounded-lg border-3 border-primary focus:border-2"
                            value={formData.fullName}
                            onChange={handleChange}
                            required />

                        <Typography className="-mb-2" variant="h6">
                            Profession
                        </Typography>
                        <Input
                            placeholder="Profession"
                            size="lg"
                            name="profession"
                            className="rounded-lg border-3 border-primary focus:border-2"
                            value={formData.profession}
                            onChange={handleChange}
                            required />

                        <Typography className="-mb-2" variant="h6">
                            Photo de profil
                        </Typography>
                        <Input
                            size="lg"
                            type="file"
                            name="avatar"
                            className="rounded-lg border-3
                         border-primary focus:border-2"
                            onChange={handleFileChange}
                        />

                        <Typography className="-mb-2" variant="h6">
                            Arrière plan
                        </Typography>
                        <Input
                            size="lg"
                            type="file"
                            name="background"
                            className="rounded-lg border-3 border-primary focus:border-2"
                            onChange={handleFileChange}
                        />

                    </CardBody>
                    <CardFooter className="pt-0 justify-end items-end">
                        <Button variant="gradient" onClick={handleSubmit} className="bg-primary text-white font-bold font-montserrat items-end mx-1" >
                            Sauvegarder
                        </Button>
                        <Button variant="gradient" onClick={handleOpen} className="bg-light-gray text-white font-bold font-montserrat items-end mx-1" >
                            Annuler
                        </Button>
                    </CardFooter>
                </Card>
            </Dialog>

        </>
    )
}

export default UpdateProfileDialog