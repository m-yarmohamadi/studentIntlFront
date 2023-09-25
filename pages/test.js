import { Alert } from '@material-tailwind/react';
import React, { Fragment, useRef, useState } from 'react';
import { Fade, Zoom } from 'react-reveal';
import { Button } from 'semantic-ui-react';
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
const test = () => {
  const [disabled, setDisabled] = useState(true)

  const [users, setUsers] = useState([])
  const [index, setIndex] = useState(0)
  const [lastUser, setLastUser] = useState({})
  const [open, setOpen] = useState(false)

  const people = [
    { id: 1, name: "مهدی", lName: "یارمحمدی" },
    { id: 2, name: "علی", lName: "رضایی" },
    { id: 3, name: "احمد", lName: "محمدیان" },
    { id: 4, name: "رضا", lName: "غلامی" },
    { id: 5, name: "محمد", lName: "مومنی" }
  ]
    ; const handleUsers = () => {

      if (index <= people.length - 2) {
        setOpen(true)

        setUsers(user => [...user, people[index]]);
        setIndex(index + 1)
      } else {
        setUsers(user => [...user, people[index]]);
        setIndex(index + 1)


        setDisabled(false)

      }
      const lUser = people[index]
      setLastUser(lUser)
    }
  const cancelButtonRef = useRef(null)


  return (
    <div className='container mx-auto p-10 m-5' >

      {
        users.map((item) =>
          <Fade left cascade>

            <Alert className={`shadow-lg ${!open ? `bg-red-700` :`bg-gray-400` }  m-3 opacity-50`}>
              <h1 key={item.id}>
                {item.name} {item.lName}
              </h1>

            </Alert>
          </Fade>



        )

      }
      {index === 0 && <Button onClick={() => handleUsers()} className='  w-full bg-rose-700 text-rose-200 rounded-sm items-end p-4 m-10'>
        ثبت
      </Button>}


      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-rose-200 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <Zoom cascade>

                    <div className="m-0">
                      <div className="shadow-md bg-rose-200 px-4 pb-4 pt-5  mt-3 text-center justify-center ">
                        <Dialog.Title as="h3" className=" justify-center border-2 h-44 text-center text-5xl  leading-6 text-gray-900">
                          <div className=' text-base pb-5'>
                            برنده شماره {index}

                          </div>
                          <div className='text-indigo-800 font-extrabold pt-5'>
                            آقای{` `}{lastUser.name}{` `}{lastUser.lName}

                          </div>
                        </Dialog.Title>
                      </div>
                    </div>

                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      {disabled ? <Button onClick={() => handleUsers()} className="w-full bg-rose-700 text-rose-200 rounded-sm items-center p-4 m-3">
                        انتخاب برنده شماره {index+1}
                      </Button> : <Button onClick={() => setOpen(false)} className="w-full bg-blue-700 text-rose-200 rounded-sm items-center p-4 m-3">
                        پایان
                      </Button>}


                    </div>
                  </Zoom>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>








    </div>
  );
};

export default test;