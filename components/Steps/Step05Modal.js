import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';


import { FaRegTimesCircle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import SelectForm from './FormSteps/SelectForm';
import Inputform from './FormSteps/Inputform';
import InputFileform from './FormSteps/InputFileForm';
import { Step03Validation } from '@/Validation/formValidate';
import axios from 'axios';

const nameGrade = ['diploma', 'associateDegree', 'bachelor', 'master', 'phd'];
const initialValues = {
	grade: '',
	start: '',
	end: '',
	fieldOfStudy: '',
	country: '',
	city: '',
	schoolOrUnivercityName: '',
	GPA: '',
	outOf: '',
	fileGrade: null,
};
const validationSchema = Step03Validation;

const Step03Modal = ({ setModal, title, disableForm, setShowFormGrade }) => {
	const router = useRouter();
	const { t } = useTranslation();
	const [file, setFile] = useState('');
	const [preview, setPreview] = useState('');

	const handlechange = (e) => {
		const image = e.target.files[0];
		setPreview(URL.createObjectURL(image));
		setFile(image);
		console.log('FILE=', file);
		console.log(preview);
	};
	const onSubmit = async (values) => {
		const formData = new FormData();
		formData.append('userId', router.query.userId);
		formData.append('registrationNoticesId', router.query.form);
		formData.append('grade', values.grade);
		formData.append('start', values.start);
		formData.append('end', values.end);
		formData.append('fieldOfStudy', values.fieldOfStudy);
		formData.append('country', values.country);
		formData.append('city', values.city);
		formData.append('schoolOrUnivercityName', values.schoolOrUnivercityName);
		formData.append('GPA', values.GPA);
		formData.append('outOf', values.outOf);
		formData.append('fileGrade', file);
		const data = Object.fromEntries(formData);
		console.log(data);
		console.log(formData);
		await axios
			.post(`${process.env.NEXT_PUBLIC_URL}/auth/step03`, formData)
			.then((res) => {
				setModal(false);
				console.log(res);
			})
			.catch((error) => {
				if (error.response) {
					console.log(error.response.data);
					console.log(error.response.status);
					console.log(error.response.headers);
				} else if (error.request) {
					console.log(error.request);
				} else {
					console.log('Error', error.message);
				}
				console.log(error.config);
			});
	};
	const formik = useFormik({
		initialValues,
		onSubmit,
		validationSchema,
	});

	return (
		<div className=' fade-in  justify-center  flex  overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-md'>
			<div className='relative  w-3/5 '>
				<div className=' flex flex-col justify-start  px-6 pt-5 mx-auto  lg:pt-10'>
					<div className=' text-start bg-indigo-50  shadow-lg shadow-indigo-900 w-full  rounded-lg  dark:border md:mt-0  xl:p-0 dark:bg-indigo-800 dark:border-indigo-700'>
						<div className='p-1'>
							<form
								onSubmit={formik.handleSubmit}
								enctype='multipart/form-data'
								className='bg-indigo-900 bg-opacity-50 p-4 m-2 border border-indigo-950 rounded-lg shadow-md '
							>
								<div className=' text-end'>
									<button className='' type='' onClick={setModal}>
										<FaRegTimesCircle
											className='text-indigo-50  m-1 h-6 w-6 '
											aria-hidden='true'
										/>
									</button>
								</div>

								<div className='text-center'>
									<h1 className='pb-8 px-8 -mt-7  text-xl font-extrabold leading-tight tracking-tight text-indigo-900 md:text-2xl dark:text-white '>
										{t(title)}
									</h1>
								</div>

								<div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
									<SelectForm formik={formik} name={'grade'} value={nameGrade} />
									<Inputform formik={formik} name={'start'} type={'date'} />
									<Inputform formik={formik} name={'end'} type={'date'} />
									<Inputform
										formik={formik}
										name={'fieldOfStudy'}
										type={'text'}
									/>
									<Inputform formik={formik} name={'country'} type={'text'} />
									<Inputform formik={formik} name={'city'} type={'text'} />
									<Inputform
										formik={formik}
										name={'schoolOrUnivercityName'}
										type={'text'}
									/>
									<Inputform formik={formik} name={'GPA'} type={'number'} />
									<Inputform formik={formik} name={'outOf'} type={'number'} />
									<InputFileform
										formik={formik}
										name={'fileGrade'}
										type={'file'}
										handlechange={handlechange}
									/>
									<div></div>
								</div>
								<div>
									<button
										className='w-full p-2 my-3 rounded-md bg-indigo-800 hover:bg-indigo-900 text-indigo-50 text-lg'
										type='submit'
										disabled={!formik.isValid}
									>
										{t('submit')}
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Step03Modal;
