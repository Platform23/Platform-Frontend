import {
    Typography,
    Input,
  } from "@material-tailwind/react";
import SubmitForm from "../components/buttons/FormSubmit";
import {useNavigate } from 'react-router-dom';


const Form = () =>{
    const navigate = useNavigate();

    return(
        <main className='relative bg-white-smoke min-h-screen flex flex-col'>      
            <div className="bg-white w-full md:max-w-xl lg:max-w-2xl xl:max-w-3xl md:mx-auto px-6 lg:px-16 xl:px-12 py-10 shadow-md rounded-lg mt-10">
                <Typography variant="h4" className="text-primary font-semibold mb-7 text-left">
                    Veuillez remplir les informations
                </Typography>
                <form className="space-y-6">
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profession">
                        Profession*
                        </label>
                        <Input
                        id="profession"
                        type="text"
                        placeholder="Profession"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
                        Rôle*
                        </label>
                        <Input
                        id="role"
                        type="text"
                        placeholder="Rôle"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="communaute">
                        Communauté*
                        </label>
                        <Input
                        id="communaute"
                        type="text"
                        placeholder="Communauté"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="organisation">
                        Organisation*
                        </label>
                        <Input
                        id="organisation"
                        type="text"
                        placeholder="Organisation"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                        />
                    </div>
                </form>
                <SubmitForm label={"Soumettre"} handleClick={() => { navigate('/') }}/>
            </div>
        </main>
    )
}

export default Form;