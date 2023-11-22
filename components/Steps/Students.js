import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { PencilIcon } from "@heroicons/react/24/solid";
import {
    ArrowDownTrayIcon,
    MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
    Card,
    CardHeader,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Avatar,
    IconButton,
    Tooltip,
    Input,
} from "@material-tailwind/react";


const Students = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            await axios
                .get(`${process.env.NEXT_PUBLIC_URL}/auth/getData`)
                .then(
                    (res) => {
                        setData(res.data.data)
                        console.log(res.data.data)
                    }
                ).catch(
                    (err) => {
                        console.log(err)
                    }
                )
        }
        fetchData()
    }, []);

    const title = ["نام", "نام خانوادگی", "نام به انگلیسی", "نام خانوادگی به انگلیسی", ""]






    return (
        <div>








            <Card className="h-full w-full overflow-auto">
                <CardHeader floated={false} shadow={false} className="rounded-none">
                    <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
                        <div>
                        </div>
                        <div className="pt-2 flex w-full shrink-0 gap-2 md:w-max">
                            <div className="w-full md:w-72">
                                <Input
                                    label=""
                                    icon={<MagnifyingGlassIcon className="h-5 w-5" />}

                                />
                            </div>
                            <Button className=" bg-indigo-900 flex items-center gap-3" size="sm">
                                <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" /> Download
                            </Button>
                        </div>
                    </div>
                </CardHeader>

                <table className="w-full min-w-max table-auto text-center">
                    <thead>
                        <tr>
                            {title.map((item) => (

                                <th
                                    key={item}
                                    className="border-b border-blue-gray-100 bg-indigo-900  text-indigo-50 text-opacity-100 p-4"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-bold text-base leading-none "
                                    >
                                        {item}
                                    </Typography>
                                </th>
                            ))}

                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => {

                            return (
                                <tr key={item.id}>
                                    <td className='p-4 border-b border-blue-gray-50'>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {item.firstnamepersian}
                                        </Typography>
                                    </td>
                                    <td className='p-4 border-b border-blue-gray-50'>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {item.lastnamepersian}
                                        </Typography>
                                    </td>
                                    <td className='p-4 border-b border-blue-gray-50'>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {item.firstname}
                                        </Typography>
                                    </td>
                                    <td className='p-4 border-b border-blue-gray-50'>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {item.lastname}
                                        </Typography>
                                    </td>
                                    <td className=' border-b border-blue-gray-50'>
                                        <Typography
                                            as="a"
                                            href="#"
                                            variant="small"
                                            color="blue-gray"
                                            className="font-medium"
                                        >


                                            <button className='p-2 mx-1 w-12 text-white shadow-sm rounded-sm hover:bg-green-800 bg-green-600'>تایید</button>
                                            <button className='p-2 mx-1 w-12 text-white shadow-sm rounded-sm hover:bg-rose-800 bg-rose-600'>رد</button>

                                        </Typography>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Card>











        </div>
    );
};

export default Students;