import "./Spinner.css"

function Spinner(){
    return(
        <div className="flex flex-col items-center space-y-2">
            <div className="custom-loader"></div>
            <div className="bg-bgDark text-lg font-semibold">Loading....</div>
        </div>
    );
}

export default Spinner