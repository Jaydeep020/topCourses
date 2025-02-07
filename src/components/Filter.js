
function Filter(props){
    let filterData = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;
    function filterHandler(title){
        setCategory(title);
    }
    return(
        <div className="w-11/12 flex flex-wrap justify-center space-x-4 gap-y-4 mx-auto py-4 max-w-max ">
            {
            filterData.map( data => (
                <button onClick={()=>filterHandler(data.title)} className={`text-lg px-2 py-1
                 rounded-md font-medium text-white ${category===data.title ?"bg-opacity-60 border-solid":
                 "bg-opacity-40 border-transparent"}
                 bg-black hover:bg-opacity-50 border-2 
                 transition-all duration-300`} key={data.id}>{data.title}</button>
            ))
            }
        </div>
    );
}

export default Filter;
