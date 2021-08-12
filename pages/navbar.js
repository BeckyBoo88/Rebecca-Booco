import Link from 'next/link'
import Image from 'next/image'

export default function navbar() {
    return (
        <nav>
            <ul id='nav'>
                <li id='navList'>
                    <Link href='https://www.linkedin.com/in/rebecca-booco/' target='_blank' rel='noreferrer'> 
                        <a><Image src='/linkedin.svg' alt='linkedIn' height={50} width={50} /></a>
                    </Link>
                </li>

                <li id='git'>
                    <Link href='https://github.com/BeckyBoo88' target='_blank' rel='noreferrer'>
                    <Image src='/github.svg' alt='github' height={30} width={30} />
                    </Link>
                </li>

                <li className='navList'>
                    <Link href='mailto:rbooco07@gmail.com' target='_blank' rel='noreferrer'>
                        <Image src='/email.svg' alt='email' height={30} width={30} />
                    </Link>
                </li>

                <li className='navList' id='resume'>
                    <Link href='/Rebecca Booco Resume 2021.pdf' target='_blank' rel='noreferrer'>
                        <Image src='/resume.svg' alt='resume' height={30} width={30} />
                    </Link>
                </li>

            </ul>
            <style jsx>{`
                #nav {
                    list-style-type: none;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    margin-bottom: -10%;
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

