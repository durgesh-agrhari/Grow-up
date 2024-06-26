import React from 'react'
import './subnav.css'
import { NavLink } from 'react-router-dom'

const activeLink = ({ isActive }) => (isActive ? "activesub" : "");

const Subnav = () => {
    const subtabItem = [
        {
            title: 'Array',
            link: '/array-basic-questions',
        },
        {
            title: 'String',
            link: '/string-basic-questions',
        },
        {
            title: 'Sorting',
            link: '/sorting-basic-questions',
        },

        {
            title: 'Pattern',
            link: '/pattern-basic-questions',
        },
        {
            title: 'Searching',
            link: '/searching-basic-questions',
        },
        {
            title: 'Matrix',
            link: '/matrix-basic-questions',
        },
        {
            title: 'Stack',
            link: '/stack-basic-questions',
        },
        {
            title: 'Queue',
            link: '/queue-basic-questions',
        },
        {
            title: 'LinkedList',
            link: '/linkedlist-basic-questions',
        },
        {
            title: 'Recursion',
            link: '/recursion-basic-questions',
        },
        {
            title: 'Hashing',
            link: '/hashing-basic-questions',
        },
        {
            title: 'Heap',
            link: '/heap-basic-questions',
        },
        {
            title: 'Tree',
            link: '/tree-basic-questions',
        },
        {
            title: 'Graph',
            link: '/graph-basic-questions',
        },
        {
            title: 'DP',
            link: '/dp-basic-questions',
        },
        {
            title: 'Greedy',
            link: '/greedy-basic-questions',
        }
    ]
    return (
        <div className='subnav1'>
            <nav className='nava' >
                <ul className='home-links'>
                    {
                        subtabItem.map((data, index) => (
                            <li className='tx'>
                                <NavLink to={data.link} className={activeLink} >{data.title}</NavLink>
                            </li>
                        ))
                    }

                </ul>
            </nav>
        </div>
    )
}

export default Subnav
