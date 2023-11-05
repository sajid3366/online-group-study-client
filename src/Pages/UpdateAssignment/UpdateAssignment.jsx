
const UpdateAssignment = () => {
    return (
        <div className='bg-[#F4F3F0] px-2 lg:px-[140px] py-12 mt-12 mb-12 rounded-md'>
            <h1 className='text-2xl font-semibold mb-8 text-center'>Create A New Assignment</h1>

            <form onSubmit={handleCreateAssignment}>
                <div className="flex gap-4 mb-8">
                    <div className='md:w-1/2'>
                        <p>Assignment Title</p>
                        <input className='border-2 rounded-md mt-2 border-solid px-4 w-full h-[50px]' placeholder='Assignment Name' type="text" name="title" id="" />

                    </div>
                    <div className='md:w-1/2'>
                        <p>Difficulty Level</p>
                        {/* <input className='border-2 mt-2 rounded-md px-4 border-solid w-full h-[50px]' placeholder='Type' type="text" name="difficulty" id="" /> */}
                       
                        <select name="difficulty" className="select max-w-xs border-2 mt-2 rounded-md px-4 border-solid w-full h-[50px]">
                            <option>Easy</option>
                            <option>Medium</option>
                            <option>Hard</option>
                        </select>
                    </div>

                </div>

                <div className='flex gap-4 mb-8'>
                    <div className='md:w-1/2'>
                        <p>Mark</p>
                        <input className='border-2 rounded-md mt-2 border-solid px-4 w-full h-[50px]' placeholder='Mark' type="text" name="mark" id="" />

                    </div>

                    <div className='md:w-1/2'>
                        <p>Due Date</p>
                        <DatePicker className="border-2 rounded-md mt-2 px-4 border-solid w-[500px] h-[50px]" name="date" placeholderText="Due Date" selected={startDate} onChange={(date) => setStartDate(date)} />



                    </div>

                </div>
                <div className='flex gap-4 mb-8'>
                    <div className='w-1/2'>
                        <p>Thumbnail Image URL</p>
                        <input className='border-2 px-4 rounded-md mt-2 border-solid w-full h-[50px]' placeholder='Thumbnail Image URL' type="text" name="photo" id="" />

                    </div>
                    <div className='md:w-1/2'>
                        <p>Description</p>
                        <input className='border-2 rounded-md px-4 mt-2 border-solid w-full h-[50px]' placeholder='Description' type="text" name="description" id="" />

                    </div>


                </div>

                <input className='btn btn-block bg-slate-300' type="submit" value="Creat Assignment" />
            </form>

        </div>
    );
};

export default UpdateAssignment;