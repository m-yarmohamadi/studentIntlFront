import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

const RegistrationNotices = ({ userId }) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const getCources = async () => {
			try {
				const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/auth/getCources`);
				setData(response.data.data[0]);
				console.log(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		getCources();
	}, []);

	const router = useRouter();
	const { t } = useTranslation();
	return (
		<div className='w-full px-16 mx-8 md:mx-36'>
			<div className=' text-indigo-100 pt-2 shadow-md h-10  bg-indigo-950 '>
				{t('registrationNotices')}
			</div>
			<div className='px-8  overflow-y-auto mb-8 shadow-md h-48  bg-indigo-50 opacity-90 '>
				<table className=' w-full   text-md font-black'>
					<tbody>
						<tr className='border-b border-indigo-700'>
							<td>{t(data.courceName)}</td>
							<td>
								<button
									onClick={() => router.push(`/inputForm/${userId}/${data.id}`)}
									type='button'
									className='w-64 hover:cursor-pointer  shadow-sm shadow-indigo-950 hover:shadow-indigo-900 text-indigo-100  m-1 bg-indigo-900 hover:bg-indigo-800 border border-1 border-indigo-50 rounded-md px-6 py-2'
								>
									{t('register')}
								</button>
							</td>
						</tr>
						<tr className='border-b border-indigo-700'>
							<td>
								{t('newStudentRegistrationForMehr')}
								1401
							</td>
							<td>
								<button
									type='button'
									className=' w-96 cursor-default shadow-sm text-indigo-300  m-1 bg-indigo-50  border border-1 border-indigo-50 rounded-md px-6 py-2'
								>
									{t('theRegistrationPeriodHasEnded')}
								</button>
							</td>
						</tr>
						<tr className='border-b border-indigo-700'>
							<td>
								{t('newStudentRegistrationForMehr')}
								1400
							</td>
							<td>
								<button
									type='button'
									className=' w-96 cursor-default shadow-sm text-indigo-300  m-1 bg-indigo-50  border border-1 border-indigo-50 rounded-md px-6 py-2'
								>
									{t('theRegistrationPeriodHasEnded')}
								</button>
							</td>
						</tr>
						<tr className='border-b border-indigo-700'>
							<td>
								{t('newStudentRegistrationForMehr')}
								1399
							</td>
							<td>
								<button
									type='button'
									className=' w-96 cursor-default shadow-sm text-indigo-300  m-1 bg-indigo-50  border border-1 border-indigo-50 rounded-md px-6 py-2'
								>
									{t('theRegistrationPeriodHasEnded')}
								</button>
							</td>
						</tr>
						<tr className='border-b border-indigo-700'>
							<td>
								{t('newStudentRegistrationForMehr')}
								1398
							</td>
							<td>
								<button
									type='button'
									className=' w-96 cursor-default shadow-sm text-indigo-300  m-1 bg-indigo-50  border border-1 border-indigo-50 rounded-md px-6 py-2'
								>
									{t('theRegistrationPeriodHasEnded')}
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default RegistrationNotices;
