//@ts-nocheck
import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Select, { SingleValue } from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormData, DropdownOption } from '../types/types';


const validationSchema = Yup.object().shape({
  name: Yup.string().max(50, 'Name cannot exceed 50 characters').required('Name is required'),
  company: Yup.string().required('Company is required'),
  deliveryDate: Yup.date().required('Delivery date is required'),
  reason: Yup.string().required('Reason for visit is required'),
  distanceTravelled: Yup.string()
    .matches(/^\d{1,8}$/, 'Distance should be a valid number up to 8 digits')
    .required('Distance travelled is required'),
});

const companyOptions: DropdownOption[] = [
    { value: 'GreenLine Logistics', label: 'GreenLine Logistics' },
    { value: 'EcoFuel Inc.', label: 'EcoFuel Inc.' },
    { value: 'UrbanX Transport', label: 'UrbanX Transport' },
    { value: 'Solaris Shipping', label: 'Solaris Shipping' },
    { value: 'BlueWave Energy', label: 'BlueWave Energy' },
    { value: 'Prime Freight Solutions', label: 'Prime Freight Solutions' },
    { value: 'Nationwide Deliveries', label: 'Nationwide Deliveries' },
    { value: 'NextGen Power', label: 'NextGen Power' },
    { value: 'Atlas Foods', label: 'Atlas Foods' },
    { value: 'EnviroLogistics', label: 'EnviroLogistics' },
    { value: 'Velocity Carriers', label: 'Velocity Carriers' },
    { value: 'Pioneer Petro', label: 'Pioneer Petro' },
    { value: 'Rapid Rail Transport', label: 'Rapid Rail Transport' },
    { value: 'Unity Transport Co.', label: 'Unity Transport Co.' },
    { value: 'EcoStream Solutions', label: 'EcoStream Solutions' }
];

const reasonOptions: DropdownOption[] = [
  { value: 'Meeting', label: 'Meeting' },
  { value: 'Delivery', label: 'Delivery' },
  { value: 'Consultation', label: 'Consultation' },
  { value: 'Maintenance', label: 'Maintenance' },
  { value: 'Inspection', label: 'Inspection' },
  { value: 'Training', label: 'Training' }
];

const VisitForm: React.FC = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
    visitData: {
      name: '',
      company: '',
      deliveryDate: null,
      reason: '',
      distanceTravelled: '',
      notes: '',
    },
  });
  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    toast.success('Visit Submitted. Returning you to the Dashboard.', {
      onClose: () => navigate('/')
    });
  };

  return (
    <div className="flex items-center justify-center">
    <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center items-center flex-col md:w-3/4 lg:w-1/2">
      <div className={`flex flex-col py-2 w-full ${errors.name ? 'errorMessage' : ''}`}>
        <label className="font-secondary block mb-2 text-sm font-medium text-gray-900">Name</label>
        <input
          className="font-secondary bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          type="text"
          {...register('name')}
          maxLength={50}
          placeholder="Enter your name"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div className={`flex flex-col py-2 w-full ${errors.company ? 'errorMessage' : ''}`}>
      <label className="font-secondary block mb-2  font-medium text-gray-900">Company</label>
        <Controller name="company" control={control} className="font-secondary bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" render={({ field }) => (
            <Select
            className="font-secondary"
              {...field}
              value={companyOptions.find(option => option.value === field.value)}
              options={companyOptions}
              placeholder="Select or search for a company"
              isSearchable
              onChange={(option: SingleValue<DropdownOption>) => field.onChange(option?.value)}
            />
          )}
        />
        {errors.company && <p className="text-red-500">{errors.company.message}</p>}
      </div>

      <div className={`flex flex-col py-2 w-full ${errors.deliveryDate ? 'error' : ''}`}>
      <label className="font-secondary block mb-2  font-medium text-gray-900">Delivery Date</label>
        <Controller name="deliveryDate" control={control} render={({ field }) => (
            <DatePicker
              wrapperClassName="font-secondary bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              {...field}
              selected={field.value}
              placeholderText="Select a date"
              dateFormat="dd-MM-yyyy"
              onChange={(date: Date | null) => field.onChange(date)}
            />
          )}
        />
        {errors.deliveryDate && <p className="text-red-500">{errors.deliveryDate.message}</p>}
      </div>

      <div className={`flex flex-col py-2 w-full ${errors.reason ? 'error' : ''}`}>
      <label className="font-secondary block mb-2  font-medium text-gray-900">Reason for Visit</label>
        <Controller name="reason" control={control} className="font-secondary bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" render={({ field }) => (
            <Select
              {...field}
              className="font-secondary"
              options={reasonOptions}
              value={reasonOptions.find(option => option.value === field.value)}
              placeholder="Select a reason"
              isSearchable={false}
              onChange={(option: SingleValue<DropdownOption>) => field.onChange(option?.value)}
            />
          )}
        />
        {errors.reason && <p className="text-red-500">{errors.reason.message}</p>}
      </div>

      <div className={`flex flex-col py-2 w-full ${errors.distanceTravelled ? 'error' : ''}`}>
      <label className="font-secondary block mb-2 font-medium text-gray-900">Distance Travelled</label>
        <input
          className="font-secondary bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          type="tel"
          {...register('distanceTravelled')}
          maxLength={8}
          placeholder="Enter distance"
        />
        {errors.distanceTravelled && <p className="text-red-500">{errors.distanceTravelled.message}</p>}
      </div>

      <div className="flex flex-col py-2 w-full">
      <label className="font-secondary block mb-2  font-medium text-gray-900">Notes</label>
        <Controller name="notes" control={control} render={({ field }) => (
            <ReactQuill
              {...field}
              theme="snow"
              className="h-[200px] mb-12"
              placeholder="You can add any additional notes here"
              onChange={field.onChange}
              modules={{ toolbar: true }}
            />
          )}
        />
      </div>

      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 mt-2">Submit Visit</button>
    </form>
    <ToastContainer position="top-right" autoClose={3000} hideProgressBar closeOnClick />
    </div>
  );
};

export default VisitForm;

