import Link from 'next/link'
import Image from 'next/image'

export default function navbar() {
    return (
        <nav>
            <ul id='nav'>
                <li id='navList'>
                    <Link href='https://www.linkedin.com/in/rebecca-booco/' passHref> 
                        <a><Image src='/linkedin.svg' alt='linkedIn' target='_blank' rel='noreferrer' height={50} width={50} /></a>
                    </Link>
                </li>

                <li id='git'>
                    <Link href='https://github.com/BeckyBoo88'>
                        <Image src='/github.svg' alt='github' target='_blank' rel='noreferrer' height={30} width={30} />
                    </Link>
                </li>

                <li className='navList'>
                    <Link href='mailto:rbooco07@gmail.com' >
                        <Image src='/email.svg' alt='email' target='_blank' rel='noreferrer' height={30} width={30} />
                    </Link>
                </li>

                <li className='navList' id='resume'>
                    <Link href='/Rebecca Booco Resume 2021.pdf'>
                        <Image src='/resume.svg' alt='resume' target='_blank' rel='noreferrer' height={30} width={30} />
                    </Link>
                </li>

            </ul>
            <style jsx>{`
                #nav {
                    list-style-type: none;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    margin-top: -4%;
                }

                #navList {
                    margin-left: 900px;
                }

                #git {
                    padding-right: 10px;
                }

                #resume {
                    padding-left: 10px;
                }
            
            `}</style>
        </nav>
    )
}