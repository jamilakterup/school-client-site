import "./Teachers.css";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import {useEffect, useState} from "react";
import {Link, useLoaderData} from "react-router-dom";
import loading from "../../assets/lottie/animation_lmut4ovz.json";
import Lottie from "lottie-react";




const buttons = [
    {key: "one", label: "সকল", dept: "all"},
    {key: "two", label: "জেনারেল", dept: "general"},
    {key: "three", label: "ভোকেশনাল", dept: "vocational"},
    {key: "four", label: "স্টাফ", dept: "stuff"},
];

const teachersInfo = [
    {
        id: 1,
        name: 'jamal',
        post: 'head sir',
        dept: "general"
    },
    {
        id: 2,
        name: 'jolil',
        post: 'assistant head sir',
        dept: "general"
    },
    {
        id: 3,
        name: 'kholil',
        post: 'assistant sir',
        dept: "vocational"
    },
    {
        id: 4,
        name: 'sattar',
        post: 'assistant sir',
        dept: "general"
    },
    {
        id: 5,
        name: 'bari',
        post: 'assistant sir',
        dept: "vocational"
    },
    {
        id: 6,
        name: 'kari',
        post: 'assistant sir',
        dept: "stuff"
    },
]


const Teachers = () => {
    const params = useLoaderData();
    const [filteredTeachersInfo, setFilteredTeachersInfo] = useState(teachersInfo);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const dropInfo = teachersInfo.filter(info => params === 'all' || info.dept === params);
                setFilteredTeachersInfo(dropInfo);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [params])



    return (
        <>

            <section className="my-container">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        '& > *': {
                            m: 1,
                        },
                    }}
                >
                    <ButtonGroup className="custom-mui-btn">
                        {
                            buttons.map(button => (
                                <Link to={`/teachers/${button.dept}`} key={button.key}><Button>{button.label}</Button></Link>
                            ))
                        }
                    </ButtonGroup>
                </Box>

                {
                    isLoading ?
                        <Lottie animationData={loading} loop={true} className="w-1/3 mx-auto my-20" />
                        :
                        <div className="flex w-full gap-12 mx-auto justify-between">
                            {
                                filteredTeachersInfo.map((teacher, i) => (
                                    <div className="bg-blue-300 p-5" key={i}>
                                        <p>{teacher.name}</p>
                                        <p>{teacher.post}</p>
                                        <p>{teacher.dept}</p>
                                    </div>
                                ))
                            }
                        </div>

                }
            </section>
        </>

    );
};

export default Teachers;