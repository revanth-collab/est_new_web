import {React,useState,useEffect} from 'react'
import Header from '../components/Header/Header'
import MultiSelectDropdown from './MultiSelectDropdown'
import Footer from './Footer'
import { toast } from 'react-toastify';

const Services = ['Clinic','Spa','Salon']
const Outlets = ['',"Single Outlet",'Multiple Outlet','Corparate Franchise','Corporate Flagship']

const Contact = () => {
    const [name,setName] = useState('');
    const [role,setRole] = useState('');
    const [email,setEmail] = useState('');
    const [phoneNumber,setPhoneNumber] = useState('');
    const [location,setLocation] = useState('');
    const [typeOfOutlet,setTypeOfOutlet] = useState('');
    const [numberOfOutlet,setNumberOfOutlet] = useState('');
    const [message,setMessage] = useState('');

    const [selectedServices, setSelectedServices] = useState([]);
    const [selectedOutletTypes, setSelectedOutletTypes] = useState([]);

    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handleRoleChange = (event) => {
        setRole(event.target.value);
    }
    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    }
    const handleServiceChange = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
        setServiceType(selectedOptions);
    };
    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    }
    const handleTypeOfOutletChange = (event) => {
        setTypeOfOutlet(event.target.value);
    }
    const handleNumberOfOutletsChange = event => {
        setNumberOfOutlet(event.target.value);
    }
    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    }

    const fetchMethod = async () => {
        const url= "https://crm.esteticanow.com/api/user/insert";
        // const url="http://localhost/crm/api/user/insert";
        const formData = new FormData();

        formData.append("name", name);
        formData.append('role',role);
        formData.append('email',email);
        formData.append('phone',phoneNumber);
        formData.append('location',location);
        formData.append('outlet_type',typeOfOutlet);
        formData.append('number_of_outlets',numberOfOutlet);
        formData.append('message',message);

        selectedServices.forEach((service, index) => {
            formData.append(`service_types[${index}][name]`, service);
        });

        try {
            const response = await fetch(url, {
            method: "POST",
            body: formData,
            });

            const result = await response.json();
            console.log("Response:", result);
            toast.success('Response:',result);
        } catch (error) {
            toast.error("Error Message",error.message);
        }
    }

  return (
    <>
        <Header />
        <section className="py-8 px-6 sm:px-10 contact-us">
            
            <div className="max-w-screen-xl mx-auto mb-12 text-center sm:text-left">
                <p className="text-[12px] text-gray-500 font-semibold mb-2">Get Started</p>
                <h2 className="text-3xl sm:text-5xl font-bold text-black leading-tight">
                Get in touch with us. <br />
                We're here to assist you.
                </h2>
            </div>

            <form onSubmit={(e)=>{e.preventDefault(); fetchMethod();}} className="max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <input type="text" value={name} placeholder="Your Name" className="form-input placeholder-[#303030] font-semibold" onChange={(e)=>handleNameChange(e)} />
                    <input type="text" placeholder="Your Role" className="form-input placeholder-[#303030] font-semibold" value={role} onChange={(e)=>handleRoleChange(e)}/>
                    <input type='number'  placeholder="Phone Number" className="form-input placeholder-[#303030] font-semibold no-spinner" value={phoneNumber} onChange={(e)=>handlePhoneNumberChange(e)}/>
                    <input type="email" placeholder="Email Address" className="form-input placeholder-[#303030] font-semibold" value={email} onChange={(e)=>handleEmailChange(e)}/>
                    <MultiSelectDropdown options={Services} placeholder="Select Service Types" selectedValues={selectedServices} setSelectedValues={setSelectedServices} />
                    <input type="text" placeholder="Location" className="form-input placeholder-[#303030] font-semibold" value={location} onChange={(e)=>handleLocationChange(e)}/>
                    <select className="form-input placeholder-[#303030] font-semibold" value={typeOfOutlet} onChange={(e)=>handleTypeOfOutletChange(e)}>
                        <option value="" disabled hidden>
                            Type of Outlet
                        </option>
                        {Outlets.map(each => (
                            <option>{each}</option>
                        ))}
                    </select>
                    <input type="number" placeholder="No of Outlets" className="form-input placeholder-[#303030] font-semibold" value={numberOfOutlet} onChange={(e)=>handleNumberOfOutletsChange(e)}/>
                    {/* <input type="text" placeholder="Do you want onboard your store?" className="form-input placeholder-[#303030] font-semibold" /> */}
                </div>

                <div className="mt-6">
                <textarea
                    rows={4}
                    placeholder="Describe what is your Request"
                    className="w-full border-b border-gray-300 focus:outline-none focus:border-[#6C5DD3] text-sm px-2 py-3 bg-transparent resize-none placeholder-[#303030] font-semibold"
                    value={message}
                    onChange={(e)=>handleMessageChange(e)}
                ></textarea>
                </div>

                <div className="mt-10">
                <button
                    type="submit"
                    className="bg-[#6C5DD3] text-white px-6 py-3 rounded-lg text-sm font-medium shadow-md hover:shadow-lg transition"
                >
                    Leave us a Message →
                </button>
                </div>
            </form>
            </section>
        <Footer />
    </>
  )
}

export default Contact
