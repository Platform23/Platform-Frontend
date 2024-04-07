import {
    Button,
    Dialog,
    Card,
    CardBody,
    CardFooter,
    Typography,
    Input,
  } from "@material-tailwind/react";
 


  const UpdateProfileDialog = ({open, handleOpen}) =>{
    

    return(
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
                        Nom d'utilisateur
                    </Typography>
                    <Input placeholder="Certifications..." size="lg" className="rounded-lg border-3 border-primary focus:border-2" required/>
                    
                    <Typography className="-mb-2" variant="h6">
                        Profession
                    </Typography>
                    <Input placeholder="Microsoft" size="lg" className="rounded-lg border-3 border-primary focus:border-2" required/>
                    
                    <Typography className="-mb-2" variant="h6">
                        Photo de profil
                    </Typography>
                    <Input size="lg" type="file" className="rounded-lg border-3 border-primary focus:border-2" />

                    <Typography className="-mb-2" variant="h6">
                        Arrière plan
                    </Typography>
                    <Input size="lg" type="file" className="rounded-lg border-3 border-primary focus:border-2" />

                </CardBody>
                <CardFooter className="pt-0 justify-end items-end">
                    <Button variant="gradient" onClick={handleOpen} className="bg-primary text-white font-bold font-montserrat items-end mx-1" >
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