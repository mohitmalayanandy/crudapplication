import React from 'react'

const Register = () => {
    return (
        <div>
            <form className="mt-4">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-600">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-indigo-500"
                        placeholder="John Doe"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-indigo-500"
                        placeholder="john@example.com"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="age" className="block text-sm font-medium text-gray-600">Age</label>
                    <input
                        type="text"
                        id="age"
                        name="age"
                        className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-indigo-500"
                        placeholder="25"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-600">Address</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-indigo-500"
                        placeholder="e.g:-Bhubaneswar"
                        required
                    />
                </div>

                <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition">
                    Save
                </button>
            </form>
        </div>
    )
}

export default Register