const SidebarItem = () => {
  return (
    <>
    {new Array(50).fill(0).map((el, idx) => idx +1).map( (el, index) => 
      (<section className={"my-5 " + (index === 0 ? 'mt-10' : '')} key={el}>
        {el}
      </section>)
    )}
    </>
  )
}

export default SidebarItem