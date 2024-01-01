import SelectSteps from './SelectSteps';
import { useFormik } from 'formik';
import { Step02Validation } from '@/Validation/formValidate';
import NextStep from './NextStep';
import { useTranslation } from 'react-i18next';
import CheckboxStep from './CheckboxStep';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { toggleStep } from '@/fuchers/steps/StepSlice';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const validationSchema = Step02Validation;
const initialValues = {
	userId: '',
	registrationNoticesId: '',
	applicationType: '',
	scholarshipType: '',
	Degree: '',
	firstPriority: '',
	secondPriority: '',
	thirdPriority: '',
	sabbatical: false,
	degreeAndGraduationConfirmationLetter: false,
	studentExchangeProgram: false,
	Other: false,
	reasonForStudyingInThisUniversity: '',
};

const Step02 = () => {
	const router = useRouter();

	const { t } = useTranslation();
	const stepform = useSelector((state) => state.stepReducer.step);
	const dispatch = useDispatch();
	const [data, setData] = useState([]);
	const [formValues, setFormValues] = useState(null);

	useEffect(() => {
		const fetchStep02 = async () => {
			try {
				const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/auth/getStep02`);
				const data = response.data.data;
				setData(data);
				setFormValues(data[0]);
				console.log(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchStep02();
	}, []);

	const onSubmit = async (values) => {
		console.log(values);
		try {
			const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}/auth/step02`, {
				...values,
				userId: router.query.userId,
				registrationNoticesId: router.query.form,
			});
			dispatch(toggleStep(stepform + 1));
			console.log(res.data);
		} catch (err) {
			console.log(err);
		}
	};
	const formik = useFormik({
		initialValues: formValues || initialValues,
		onSubmit,
		validationSchema,
		validateOnMount: true,
		enableReinitialize: true,
	});

	return (
		<div className='fade-in  h-full w-full'>
			<div className='vh70 rounded-md m-1 px-8 text-center bg-indigo-900 bg-opacity-60 flex flex-col justify-between'>
				<div className=' py-4 text-3xl text-white font-black'>{t('titleStep02')}</div>

				<form onSubmit={formik.handleSubmit} className='  '>
					<div className='shadow-sm shadow-indigo-300 p-2 mb-2 grid grid-cols-1 md:grid-cols-2 gap-4 border border-1 border-indigo-50 bg-indigo-950 bg-opacity-20'>
						<div className=' mb-2'>
							<SelectSteps
								formik={formik}
								name={'applicationType'}
								value={['nonScholarship', 'scholarship']}
							/>
						</div>
						{formik.values.applicationType === 'scholarship' && (
							<div className=' mb-2'>
								<SelectSteps
									formik={formik}
									name={'scholarshipType'}
									value={[
										'scholarshipOfIslamicRepublicOfIran',
										'scholarshipOfUniversityOfScienceAndCulture',
										'scholarshipOfApplicantSCountry',
									]}
								/>
							</div>
						)}
					</div>
					<div className='shadow-sm shadow-indigo-300 mb-2 p-3 border border-1 border-indigo-50 bg-indigo-950 bg-opacity-20'>
						<div className=' mb-2'>
							<SelectSteps
								formik={formik}
								name={'Degree'}
								value={['Bachelor', 'Master', 'PhD']}
							/>
						</div>
						<div className='grid grid-cols-1 md:grid-cols-3 gap-4 '>
							<div className=' mb-2'>
								<SelectSteps
									formik={formik}
									name={'firstPriority'}
									value={['001', '002', '003']}
								/>
							</div>
							<div className=' mb-2'>
								<SelectSteps
									formik={formik}
									name={'secondPriority'}
									value={['0001', '0002', '0003']}
								/>
							</div>
							<div className=' mb-2'>
								<SelectSteps
									formik={formik}
									name={'thirdPriority'}
									value={['00001', '00002', '00003']}
								/>
							</div>
						</div>
					</div>
					<div className=' grid grid-cols-1 md:grid-cols-5 gap-2 '>
						<div className='shadow-sm shadow-indigo-300 p-2 h-28 col-span-3 grid grid-cols-1 md:grid-cols-2 gap-2 border border-1 border-indigo-50 bg-indigo-950 bg-opacity-20'>
							<div className=' mb-2'>
								<CheckboxStep
									formik={formik}
									name={'sabbatical'}
									type={'checkbox'}
								/>
							</div>
							<div className=' mb-2'>
								<CheckboxStep
									formik={formik}
									name={'degreeAndGraduationConfirmationLetter'}
									type={'checkbox'}
								/>
							</div>
							<div className=' mb-2'>
								<CheckboxStep
									formik={formik}
									name={'studentExchangeProgram'}
									type={'checkbox'}
								/>
							</div>
							<div className=' mb-2'>
								<CheckboxStep formik={formik} name={'Other'} type={'checkbox'} />
							</div>
						</div>
						<div className='shadow-sm shadow-indigo-300 p-2 h-28 col-span-2 flex flex-col border border-1 border-indigo-50 bg-indigo-950 bg-opacity-20'>
							<label
								className='block text-md font-normal text-indigo-50 text-center'
								htmlFor='reasonForStudyingInThisUniversity'
							>
								{t('reasonForStudyingInThisUniversity')}
							</label>
							<textarea
								{...formik.getFieldProps('reasonForStudyingInThisUniversity')}
								name='reasonForStudyingInThisUniversity'
								className={
									formik.errors['reasonForStudyingInThisUniversity'] &&
									formik.touched['reasonForStudyingInThisUniversity']
										? `block w-full px-4   text-indigo-700 bg-rose-100 border rounded-md focus:border-indigo-400 border-rose-400  focus:ring-rose-600 focus:outline-none focus:ring focus:ring-opacity-40`
										: `block w-full px-4   text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40`
								}
							></textarea>
							<div className=' text-start h-4'>
								{formik.errors['reasonForStudyingInThisUniversity'] &&
									formik.touched['reasonForStudyingInThisUniversity'] && (
										<p className=' text-xs text-start text-rose-400'>
											{formik.errors['reasonForStudyingInThisUniversity']}
										</p>
									)}
							</div>
						</div>
					</div>
					<NextStep disableForm={!formik.isValid} type={'submit'} onSubmit={onSubmit} />
				</form>
			</div>
		</div>
	);
};

export default Step02;
