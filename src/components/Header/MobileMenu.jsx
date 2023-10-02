import React from 'react';
import {Accordion, AccordionItem as Item} from "@szhsin/react-accordion";
import {FiChevronDown} from 'react-icons/fi';
import {NavLink} from 'react-router-dom';



const AccordionItem = ({header, ...rest}) => (
    <Item
        {...rest}
        header={({state: {isEnter}}) => (
            <>
                {header}
                <p className={`ml-auto transition-transform duration-200 ease-out ${isEnter && "rotate-180"
                    }`}><FiChevronDown /></p>
            </>
        )}
        className="border-b"
        buttonProps={{
            className: ({isEnter}) =>
                `flex w-full p-4 text-left hover:bg-slate-100 ${isEnter && "bg-slate-200"
                }`
        }}
        contentProps={{
            className: "transition-height duration-200 ease-out"
        }}
        panelProps={{className: "p-0"}}
    />
);


const MobileMenu = () => {

    return (
        <div className="border-t">
            <Accordion transition transitionTimeout={200}>
                <AccordionItem header="প্রতিষ্ঠানের তথ্য">
                    <NavLink to="#" className='extra-font block hover:bg-slate-100 transition-all duration-300 p-2'>প্রতিষ্ঠানের ইতিহাস</NavLink>
                    <NavLink to="#" className='extra-font block hover:bg-slate-100 transition-all duration-300 p-2'>প্রতিষ্ঠানের অনুমতি ও স্বীকৃতি</NavLink>
                    <NavLink to="#" className='extra-font block hover:bg-slate-100 transition-all duration-300 p-2'>এমপিও এবং জাতীয়করণ তথ্য</NavLink>
                    <NavLink to="#" className='extra-font block hover:bg-slate-100 transition-all duration-300 p-2'>শ্রেণী ও লিঙ্গভিত্তিক শিক্ষার্থীর তথ্য</NavLink>
                    <NavLink to="#" className='extra-font block hover:bg-slate-100 transition-all duration-300 p-2'>শ্রেণীভিত্তিক অনুমোদিত শাখা</NavLink>
                </AccordionItem>

                <AccordionItem header="শিক্ষকমন্ডলী">
                    <NavLink to="#" className='extra-font block hover:bg-slate-100 transition-all duration-300 p-2'>জেনারেল</NavLink>
                    <NavLink to="#" className='extra-font block hover:bg-slate-100 transition-all duration-300 p-2'>ভোকেশনাল</NavLink>
                    <NavLink to="#" className='extra-font block hover:bg-slate-100 transition-all duration-300 p-2'>স্টাফ</NavLink>
                </AccordionItem>

                <AccordionItem header="অন্যান্য">
                    <NavLink to="#" className='extra-font block hover:bg-slate-100 transition-all duration-300 p-2'>মুজিব কর্ণার</NavLink>
                    <NavLink to="#" className='extra-font block hover:bg-slate-100 transition-all duration-300 p-2'>সকল তথ্য</NavLink>
                    <NavLink to="#" className='extra-font block hover:bg-slate-100 transition-all duration-300 p-2'>নোটিশ</NavLink>
                    <NavLink to="#" className='extra-font block hover:bg-slate-100 transition-all duration-300 p-2'>একাডেমিক ক্যালেন্ডার</NavLink>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default MobileMenu;