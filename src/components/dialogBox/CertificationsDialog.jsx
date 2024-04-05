import {
    Button,
    Dialog,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
  } from "@material-tailwind/react";


  const CertificationsDialog = ({open, handleOpen}) =>{

    return(
        <>
            <Dialog
                size="md"
                open={open}
                handler={handleOpen}
                className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
            >
                <Card className="mx-auto w-full max-w-[24rem]">
                <CardBody className="flex flex-col gap-4">
                    <Typography variant="h4" color="blue-gray">
                    Sign In
                    </Typography>
                    <Typography
                    className="mb-3 font-normal"
                    variant="paragraph"
                    color="gray"
                    >
                    Enter your email and password to Sign In.
                    </Typography>
                    <Typography className="-mb-2" variant="h6">
                    Your Email
                    </Typography>
                    <Input label="Email" size="lg" />
                    <Typography className="-mb-2" variant="h6">
                    Your Password
                    </Typography>
                    <Input label="Password" size="lg" />
                    <div className="-ml-2.5 -mt-3">
                    <Checkbox label="Remember Me" />
                    </div>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button variant="gradient" onClick={handleOpen} fullWidth>
                    Sign In
                    </Button>
                    <Typography variant="small" className="mt-4 flex justify-center">
                    Don&apos;t have an account?
                    <Typography
                        as="a"
                        href="#signup"
                        variant="small"
                        color="blue-gray"
                        className="ml-1 font-bold"
                        onClick={handleOpen}
                    >
                        Sign up
                    </Typography>
                    </Typography>
                </CardFooter>
                </Card>
            </Dialog>
        
        </>
    )
  }

  export default CertificationsDialog