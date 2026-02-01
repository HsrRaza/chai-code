
interface LinkingProps{
    imgLink:string;
}
const UdemyCourseCard = () => {
    return (
        <div className="mt-10">
            <div className=" p-2 ">
                <h1 className="text-3xl md:text-5xl text-shadow-stone-500 ">Udemy Courses</h1>
                <h3 className="text-xl md:text-2xl/relaxed mt-2 "> Learn at your own pace with structured, high-quality video lessons designed to give you real-world skills and flexibility. </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3">
            <UdemyCard  imgLink={"https://img-c.udemycdn.com/course/750x422/6197521_c636.jpg"}/>
            <UdemyCard imgLink={"https://img-c.udemycdn.com/course/750x422/6629195_fdfd_3.jpg"}/>
            <UdemyCard imgLink={"https://img-c.udemycdn.com/course/750x422/6514953_e5eb_2.jpg"}/>

            </div>
        </div>
    )
}

export default UdemyCourseCard


const UdemyCard = ({imgLink}:LinkingProps) => {
    return <>
        <div className="p-2">


            <div>
                <div className="p-4  md:mt-10 ">
                    <img src={imgLink} alt="No Image" className="w-60 md:w-120 md:h-60  rounded-xl object-cover hover:scale-105 transition-all duration-300 ease-in" />
                </div>
            </div>

        </div>
    </>
}