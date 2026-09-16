// EXAMPLE 1.
// import React from 'react'
// import User from './Components/User'
// const App = () => {
//   return (
//     <div className='Parent'>
//      <User name = "SHIVANGI"/>
//       <User name = "JAISWAL"/>

//     </div>
//   )
// }

// export default App

// Example 2.
// import React from 'react'
// import User from './Components/User'

// const App = () => {
//   const arr = [10, 20 , 30 ,40 , 50]
 
//   return (
//     <div className='parent'>
//       <User name ={arr[0]}/> 
//        <User name ={arr[1]}/> 
//       <User name ={arr[2]}/> 
 
//          </div>
//   )
// }
// export default App


//EXAMPLE 3 INSTEAD OF WRITING ONE BY ONE CODE USE ARRAY MAP..

// import React from 'react'
// import User from './Components/User'

// const App = () => {
//   const arr = [10, 20 , 30 ,40 , 50];
//   return (
//     <div className='parent'>
//      {arr.map(function(){
//       //  return 'hello'
//       // return 'shivangi'
//       // return  arr
//      })}
     
//      </div> 
//   )
// }
// export default App


//Example 4 using elem and array map.

// import React from 'react'
// import User from './Components/User'
// const App = () => {
//   const arr = [10, 20 ,30 ,40 , 50];
//   return (
//     <div>
//       <div className="parent">
//       {arr.map(function(elem){
//         // return elem
//         // return elem*2
//         // return elem+2
//         return elem/2
//       })}
//       </div>
//     </div>
//   )
// }
// export default App



//EXAMPLE 5 USING ARRAY OF AN OBJECT.

// import React from 'react'
// import User from './Components/Card'
// const App = () => {
//   const arr = [
//     {user :'shivangi',
//       age: '21'
//     },
//     {user :'atul',
//       age :"90"
//     },
//     {user :'anjali',
//       age:'89'
//     }
//   ];

//   arr.forEach(function()
// {
//   console.log('hello')
// })
//   {arr.map(function(elem)
// {
//   console.log(elem);
// })}


// arr.map(function(elem)
// {
//  console.log(elem.user);
//  console.log(elem.age);
 
// })
//   return (
//     <div>
//       <div className="parent">

//       </div>
//     </div>
//   )
// }

// export default App



//EXAMPLE JOBS OPENINGS.

import React from 'react'
import Card from './Components/Card'


const App = () => {
  const jobs = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjiOvp6MXrCUMD7_9x01HieBQHFLPePd8uRokw53_eEcw3O0nXlHEfB1H6&s=10",
    company: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$65/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "data:image/png;base64,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",
    company: "Amazon",
    datePosted: "2 weeks ago",
    post: "Senior UI/UX Designer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAvVBMVEX///8CpO9/uQLzUSP/uQH/uQD///7///v+/f////am2OoAmN324572tAD2TyLzUCbQ4KPs//93rwCItSbk7b7vxlr+//Kdwljrv6zfSBLt2MjVWz98rQD//+T//+7A6u3vyFUentTWXjNTrtzrv7LWXDju2cPz5N7myrz28Ojc5MDt8djOPQCcuFZypQDnwru+Zk3u1NWdwWbV4K/s37n29v/C3ulHqNBbr9DM6/Xy2IP157sel8cAiMrlqwBizZX+AAACfElEQVR4nO2bjVLTQBSFV0nvboAkFCVCtaFgW61V/Bcr6Ps/FrsJTlsFc7Kha2Z6vqad6cw2++25S2bInShFCCGEEEIIISQMAqKMHdoxJxEjWtsPmHD+SqOEkbrNCx0OD7xzqiqBas7Vzz+xi7dv+MStpPCR2h6y6fIZF8+r8fF4XL7reD2zUm8OUOa20s3FjJXScvz2BGQyUDp+dwhycaDd6T2lTnbSHXfUkT4fqDh/9hjkRTupNM1SBJtUXMBShy2TyrIszWpJJ1Ol8aSclGlTvgwqn01Kmkm1Kp8F21PhpFxSAA2lWm50Sv1/qZZ/fVuUFKUoRSlKUYpSlKIUpSi1xVL8x4FSlKIUpcJePKFbw5YgUpXX+/OJ4/xuJit8+Fjk+acnIBefXSfEp8FmjJkNppbBPUxX+DLTIvOnKHMXk09UjTpN2qh+3uQXtg6ebSODo7SOVdXGUrL+Wv9qpJTxlHJtvj5Oob8OUYrcq3ymLMW3y5cYl98XRTz7cYRy5bXRjXHN1929RyBnpyLDUQTQs0eyH9syelyn3G+aSGlVjOyMf7/Wv/aiJLQUEtStlMdlavNJhZPqXFLSwaQkhpJyWoGl6pOyUj0mxaSYFJNiUkyKSW1fUp2UYvmYFJNiUkyKSXUjqSD3pzqY1PWpaCflqEuqlPK5OewjNRz1lvPeS1Td8xSFPzviK3VWSiUlNVJJFAWSqpJabuXaPRVQ6p8ZLWkn9XMP5HohUhwlIL/8pFTZBlnswvRF4qt9lLlnZ635IrTEKF4pNcW4VYdYuWry0GFVC6gHp363owJYlcPrz/gADx3iPUh4BQq0fzCpNlMRQgghhBBCCNkEN/i86o6GE9fDAAAAAElFTkSuQmCC",
    company: "Microsoft",
    datePosted: "1 week ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$80/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "data:image/png;base64,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",
    company: "Meta",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Remote",
    tag2: "Junior Level",
    pay: "$70/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "data:image/png;base64,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",
    company: "Apple",
    datePosted: "4 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$110/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "data:image/png;base64,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",
    company: "Netflix",
    datePosted: "6 days ago",
    post: "Product Designer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "data:image/png;base64,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",
    company: "NVIDIA",
    datePosted: "10 days ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$130/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "data:image/png;base64,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",
    company: "Adobe",
    datePosted: "8 days ago",
    post: "UI Developer",
    tag1: "Remote",
    tag2: "Junior Level",
    pay: "$75/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJsAAACUCAMAAACz6atrAAAAY1BMVEUAAAD////7+/vq6uq1tbXBwcGfn585OTmMjIxhYWEQEBD39/fw8PDFxcVMTEzj4+NTU1NmZmZ8fHyYmJjPz88gICCGhoYvLy8lJSVwcHAbGxvc3Nyvr6/V1dWSkpJra2tFRUU80MXaAAADrklEQVR4nO2c25qqIBhAwbPiOQ+ZVr7/U24BMUBtZpuOXfzrZoyDrE8QficMYZz06PvoE4wRxunZHouk1M0522IFB6MwPltihThE0dkOqxTIO1thFQ99a5cOnYqCsxVW+V4zAAAAAAAAAAAAAAAAAAAAAAAAAAD2J2C8SV7O/xOsaOAyS85pciQKFM2fe1FCPDD/Mt+hyXgq8PhzL4pJm7ZnyczNmAqc820/uG0D3LYBbtv4L7fs4jiev3KmOL84j+daO33cH+dWNq3BJmRsFNlNL+9bIrPN6ym1w4QYNgqaZMgxD3Nr7ljinimle1vOTKYRYPGTFyz5MDcHqxjyEpxpmdguZbdR/Ci3RG8dY2sqWxmzzEJyM4xj3fi1ipo4jvNibEtcOZ9/DDs/jlPPlM0tUZW0UWTNGtnPzRo7CsURV+WBkxuql7Ei7HMluRnWtgDwt26k0nPHTurYsRREPZkckdzkqke4qdElF6L3o8uOOjnzOWVyt81bPX/ppg2WgHVkOxx59CCpldxI3A78XlibrHdyM/Xtmg3rt2EVSBY6rWb3Rjq63Uu0kd+5FbMChPfblV3AzFd4sjr56LZ99+7Wtd7mwywjeI1qWheOdZsPGYfXy+fzruDysVuyfNk1t/nu4Auv98bN+diNrcPFLK6wVLf582nHm22YGzFmkB3cWPXZbVi2qtt8E/+dJ6dsvJXuAteP3dhkQO8phRirbq1e7SqGe7hUXfChW88aSbRUW3Mz9E5lXUqnsGmePcAtiMQVkBgDMmld0OR9IpR4FKLOMYF4xeRDN1SxkxN5lnDNmZvawo3Hc7TOjY1M4srZOen2cUNjsP0aM08xCygxUvFqPuZhEZ95+IAl0kMMnV7adBe3VDTOx1QcGYtuOBnjoFvH1cRbLuPYtMd5KL2/6n7shnLROiamsgRpce9wNazOnj5Po6AV8tbFscXjVraP2zjkFCtt7rVCvYQUa9Z3PRNj3sU7uKGn9qzS1p7q1rimWkJ9Ea3TVvz7ODb3cEN1J62L4aPky+Xr/5YVujpyCUeLyXz5ATV5iMeDD2MkQendzXDALDLabvzwBmhGNfx99NTfa8OQkKFEfp3Xv1YFrW8mXfpanLPhLI99/lfs9n39tkAZ++mbErd6QRoAAAAAAAAAAAAAAAAAAAAAAAAAAODLcH8uchIuWtsydD45+v+dv3+FhZJv/br6mqCTXo/4GQ8jvlH5CyH0t4WLb/xx0KBgv3uMN+44P5KA7m75B4WyJPqoAhajAAAAAElFTkSuQmCC",
    company: "Uber",
    datePosted: "3 weeks ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$90/hr",
    location: "Gurgaon, India"
  },
  {
    brandLogo: "data:image/png;base64,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",
    company: "Salesforce",
    datePosted: "12 days ago",
    post: "Cloud Engineer",
    tag1: "Hybrid",
    tag2: "Senior Level",
    pay: "$105/hr",
    location: "Hyderabad, India"
  }
];
console.log(jobs);

  return (
    <div>
      <div className="parent">
        {/* react giving index to each element. */}
        {jobs.map(function(elem , idx)
        {
          // return <h1>{elem.company}</h1>

          // return <Card company ={elem.company} location ={elem.location} brandLogo ={elem.brandLogo} post ={elem.post}
          // pay = {elem.pay} tag1 = {elem.tag1} tag2 ={elem.tag2} datePosted ={elem.datePosted}/>
          

          return<div key ={idx}>
          <Card company ={elem.company} location ={elem.location} brandLogo ={elem.brandLogo} post ={elem.post}
          pay = {elem.pay} tag1 = {elem.tag1} tag2 ={elem.tag2} datePosted ={elem.datePosted}/> 
      </div>
      })}
   </div>
   </div>
  )
  }
export default App;
