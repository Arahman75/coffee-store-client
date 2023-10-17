import React from 'react';
import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = {
            name, quantity, supplier, taste, category, details, photo
        }
        console.log(newCoffee);

        fetch('https://coffee-store-server-fl6f8tl27-abdur-rahmans-projects.vercel.app/coffee', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'User added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }


    return (
        <div className='bg-[#F4F3F0] p-20'>
            <h2 className='text-center text-3xl font-extrabold'>Add New Coffee</h2>
            <form onSubmit={handleAddCoffee}>
                {/* form name and quantity row */}
                <div className='md:flex mb-6'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-2xl font-bold">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='name' placeholder="Coffee Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-2xl font-bold">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='quantity' placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form supplier and taste row */}
                <div className='md:flex mb-6'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-2xl font-bold">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='supplier' placeholder="Supplier" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-2xl font-bold">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='taste' placeholder="Taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className='md:flex mb-6'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-2xl font-bold">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='category' placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-2xl font-bold">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='details' placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form photo url row */}
                <div className='mb-6'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-2xl font-bold">Photo Url</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='photo' placeholder="Photo Url" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input className="btn btn-block bg-slate-300" type="submit" value="Add Coffee" />
            </form>
        </div>
    );
};

export default AddCoffee;