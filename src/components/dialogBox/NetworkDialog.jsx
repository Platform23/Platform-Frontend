import {
    Button,
    Dialog,
    Card,
    CardBody,
    CardFooter,
    Typography,
    Input,
  } from "@material-tailwind/react";
// import DatePickerInput from "../inputs/DatePickerInput";
 


  const NetworkDialog = ({open, handleOpen, networkName, networkDesc}) =>{
    

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
                        {networkName}
                    </Typography>

                    <Typography className="-mb-2" variant="h6">
                        {networkDesc}
                    </Typography>
                    
                </CardBody>
                <CardFooter className="pt-0 justify-end items-end">
                    <Button variant="gradient" onClick={handleOpen} className="bg-light-gray text-white font-bold font-montserrat items-end mx-1" >
                        Fermer
                    </Button>
                    <Button variant="gradient" onClick={handleOpen} className="bg-primary text-white font-bold font-montserrat items-end mx-1" >
                        Intégrer
                    </Button>
                    
                </CardFooter>
                </Card>
            </Dialog>
        
        </>
    )
  }

  export default NetworkDialog