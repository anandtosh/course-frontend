import React, { useEffect, useState } from 'react'
import Accordion from './Accordion'
import ButtonLink from './ButtonLink'
import { useLocation } from 'react-router-dom'

/**
 * 
 * @param {menu} [{faIcon:icon, to: /, title:title, subtitle: subtitle or default null}]
 * @returns 
 */
const AccordionMenu = ({title,menu}) => {
  const {pathname} = useLocation()
  const [isOpen, setIsOpen] = useState(-1)
  useEffect(() => {
    for(const element of menu){
        setIsOpen(false)
        if(element.to == pathname){
            setIsOpen(true)
            break;
        }
    }
  },[menu])

  if(isOpen <0){
    return <></>
  }

  return (
    <Accordion 
        key={title}
        title={title}
        hideBorderOnOpen={true}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        content={
            <div>
                {
                    menu.map((el) => (
                        <ButtonLink
                            key={el.title} 
                            to={el.to}
                            icon={el.icon}
                            title={el.title}
                            subtitle={el.subtitle}
                            isActive={el.to == pathname}
                            // self={() => {el.to == pathname ? setIsOpen(true) : setIsOpen(false)}}
                        />
                    ))
                }
            </div>
        }
    />
  )
}

export default AccordionMenu