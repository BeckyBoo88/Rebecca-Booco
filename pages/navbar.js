import Link from 'next/link'
import Image from 'next/image'

export default function navbar() {
    return (
        <nav>
            <ul id='nav'>
                <li id='navList'>
                    <Image src='/linkedin.svg' alt='linkedIn' height={50} width={50} />
                    <Link href='https://www.linkedin.com/in/rebecca-booco/'> </Link>
                </li>

                <li id='git'>
                    <Image src='/github.svg' alt='github' height={30} width={30} />
                    <Link href='https://github.com/BeckyBoo88'> </Link>
                </li>

                <li className='navList'>
                    <Image src='/email.svg' alt='email' height={30} width={30} />
                    <Link href='mailto:rbooco07@gmail.com'> </Link>
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
                    margin-left: 800px;
                }

                #git {
                    padding-right: 10px;
                }
            
            `}</style>
        </nav>
    )
}

