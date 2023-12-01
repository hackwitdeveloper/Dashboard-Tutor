<ul className="divide-y divide-slate-100 dark:divide-slate-700 -mx-6 -mb-6">
{data?.map((item, i) => (
  <li key={i}>
    <Link
      to="chat"
      className="hover:bg-slate-100 dark:hover:bg-slate-600 dark:hover:bg-opacity-70 hover:text-slate-800 text-slate-600 dark:text-slate-300 block w-full px-4 py-3 text-sm mb-2 last:mb-0 cursor-pointer"
    >
      <div className="flex ltr:text-left rtl:text-right">
        <div className="flex-none ltr:mr-3 rtl:ml-3">
          <div className="h-8 w-8 bg-white dark:bg-slate-700 rounded-full relative">
            <span
              className={`${
                item.active ? "bg-secondary-500" : "bg-success-500"
              } w-[10px] h-[10px] rounded-full border border-white dark:border-slate-700  inline-block absolute right-0 top-0`}
            ></span>
            <img
              src={item.image}
              alt=""
              className="block w-full h-full object-cover rounded-full border hover:border-white border-transparent"
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="text-slate-800 dark:text-slate-300 text-sm font-medium mb-1`">
            {item.fname}
          </div>
          <div className="text-xs hover:text-[#68768A] font-normal text-slate-600 dark:text-slate-300">
            {item.desc}
          </div>
          <div className="text-slate-400 dark:text-slate-400 text-xs mt-1">
            3 min ago
          </div>
        </div>
        {item.hasnotifaction && (
          <div className="flex-0">
            <span className="h-4 w-4 bg-danger-500 border border-none rounded-full text-[10px] flex items-center justify-center text-white">
              {item.notification_count}
            </span>
          </div>
        )}
      </div>
    </Link>
  </li>
))}
</ul>

 {/* <div className="grid grid-cols-12 gap-6 mb-6">
        <div className="2xl:col-span-12 lg:col-span-8 col-span-12">
          <Card bodyClass="p-4">
             <div className="grid xl:grid-cols-4 lg:grid-cols-2 col-span-1 gap-3">
                <GroupChart3 />
              </div>
          </Card>
        </div>
      </div> */}
      <div className="lg:col-span-12 col-span-12">
        {/* <Card title="Recent Users">
          <DashboardUser />
        
        </Card> */}
      </div>


import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import backgroundImage from './assets/your-image.jpg'; // Update the path to your image

function Login({ setToken }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const headers = {
                'Content-Type': 'application/json',
            };
            
            const response = await axios.post('http://localhost:3000/adminlogin', formData, { headers });
            const { token } = response.data;
            
            setToken(token);
            localStorage.setItem('token', token);
            toast.success('Login successful');
            navigate('/dashboard');

        } catch (error) {
            console.error(error.response);
            toast.error('Invalid credentials');
        }
    }

    return (
        <section className="vh-100" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Rest of your existing code */}
            {/* ... */}
        </section>
    )
}

export default Login;
