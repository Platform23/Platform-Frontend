import {
    Button,
    Dialog,
    Card,
    CardBody,
    CardFooter,
    Typography,
    Input,
} from "@material-tailwind/react";
import MentorRequest from "../checkbox/MentorRequestBox";
// import DatePickerInput from "../inputs/DatePickerInput";
import { useUserProfile } from "../../hooks/useUserProfile";
import { useState } from "react";

const ExperienceDialog = ({ open, handleOpen, userId }) => {
    const { error, addUserExperience } = useUserProfile(userId);
    const [formData, setFormData] = useState({
        title: '',
        organization: '',
        // startDate: '',
        // endDate: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleDateChange = (date, name) => {
        setFormData({ ...formData, [name]: date });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await addUserExperience(formData);
        handleOpen();
    };

    return (
        <>
            <Dialog
                size="lg"
                open={open}
                handler={handleOpen}
                className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
            >
                <Card className="mx-auto w-full max-w-[30rem]">
                    <CardBody className="flex flex-col gap-4 mb-5">
                        <Typography variant="h4" className="text-primary font-semibold">
                            Expériences Professionnelles
                        </Typography>

                        <Typography className="-mb-2" variant="h6">
                            Ajouter une expérience professionnelle*
                        </Typography>
                        <Input
                            name="title"
                            placeholder="Certifications"
                            size="lg"
                            className="rounded-lg border-3 border-primary focus:border-2"
                            onChange={handleChange}
                            value={formData.title}
                            required />

                        <Typography className="-mb-2" variant="h6">
                            Rôle au sein de votre organisation*
                        </Typography>
                        <Input
                            name="organization"
                            placeholder="Organisation"
                            size="lg"
                            className="rounded-lg border-3 border-primary focus:border-2"
                            onChange={handleChange}
                            value={formData.organization}
                            required />

                        {/* <Typography className="-mb-2" variant="h6">
                            Lien
                        </Typography>
                        <Input size="lg" className="rounded-lg border-3 border-primary focus:border-2" /> */}

                        {/* <Typography className="-mb-2" variant="h6" required>
                            Date de debut*
                        </Typography>
                        <DatePickerInput
                            name={'startDate'}
                            selectedDate={formData.startDate}
                            handleChange={(date) => handleDateChange(date, 'startDate')}
                        /> */}

                        {/* <Typography className="-mb-2" variant="h6">
                            Date de fin
                        </Typography>
                        <DatePickerInput
                            name={'endDate'}
                            selectedDate={formData.endDate}
                            handleChange={(date) => handleDateChange(date, 'endDate')}
                        /> */}

                        <Typography className="-mb-4" variant="h6">
                            Devenir mentor
                        </Typography>
                        <MentorRequest />

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

export default ExperienceDialog