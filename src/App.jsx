import React from 'react'
import { Bookmark } from "lucide-react"
import Card from "./components/Card.jsx"
const App = () => {
  const jobs = [
    {
      company: "Google",
      posted: "3 days ago",
      title: "Senior UI/UX Designer",
      type: "Part-Time",
      level: "Senior Level",
      rate: "$120/hr",
      location: "Islamabad, Pakistan",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png"
    },
    {
      company: "Microsoft",
      posted: "5 days ago",
      title: "Frontend Engineer",
      type: "Full-Time",
      level: "Mid Level",
      rate: "$85/hr",
      location: "Lahore, Pakistan",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
    },
    {
      company: "Meta",
      posted: "1 day ago",
      title: "Product Designer",
      type: "Part-Time",
      level: "Entry Level",
      rate: "$70/hr",
      location: "Karachi, Pakistan",
      image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA21BMVEX///8CZNP///3//v8DY9P9//////sCZNH///oAZdEAYtP9//0AYNMAX9P2//8AY9YAW88AVcUAVsoAWcQAXNTz//8AUMQAVsQAXM8AU8Ts+v4AVsAAXc8AW8IAY9kAV83m8PidvN/b6vZIf83B1uwUZMHR5PQwb8F+pdYAVc/I3+2uy+VUh8tgjtEgZ8mqx+WUt+NgiNV4ntpViM0par94n85nltE/fMOSt9qwyuZejMq+1+mKrNcAXL3e7fzN4/htndGkz+svb8s6dsWHqtxLgMYubtBrldUAYLzfervuAAAU0klEQVR4nO1dCVcbubJWq7V0qzcvbYwNXjHGYMCZhDCE5cKNxzfz/3/Rq2pDkNpbOzaZeefom5OBCUZSSaWqr0olDSEWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYW/z9BKSWc76ulfyNc18Uvuw+P8/lE7We69oggyL7sLqFLaDZb/zoJcVB0HwqGjdC5QvxrQHOS7Wkb/eO7EeYZFInOTUx//Onl6o8/vlx9/jTuo3q5JCBuwTFyDp8G5STxxeTTZ2jmj6vPj9/6MbYM//DgH5LVpYIIEXikO7lvHRweh1EUqig6Pjyofun1uUeDwKVBAbWFD3KcpLuTeiXFZgBhmB7Uv/S6ZC7lP4OAupzSeHxZPQ5D5jiKKeX40mGMRZ3ySa8JixO4wWZ7gcsXD2YHaaKU9B0HW3B8n6kord8/cPKPWRzXFSLu3Zy3YVC+VJLNhwZjlDDKMG197YOuis0NUY8OzsosmxumoJlMyAQalVJ1pgPiBR8vzTIEgk+uS8r327h+voIVlNngHN/JBA3Lt91CLfW/lBk0kf2246Oc82ZkkjhOUvnz4mMFWQoXVad/0gHtRP103sBev6CywQJER6MmFajNS9oQAQEtd0EPjlL5KpujA6cKmlHtxihGvsQz0/Z7QDkR8V0j8l/nfRVkOz39RgK+bDOCcPBHiO5JKfk5NcuhSmdDtGy/kwO4onnZkTKb5DXw/URV7ptkqUF1AzC0YtBSiSPXCggzxY56RLjiNxJWMTwNwbr4yYahgar6aethmb2nsLaC3DVw/zIlNygDq9zGgvxGpjOoJxKM3QYBwTpKWJ52+XGZlhIq4lEpkWg418vnMPhU6c+mR36PhILQyZHSzMtGsMpl0w3A3nAxFxXJAOgcvy0ZxoU5icK/gFWFP9qPsu9KZ31PcFqUKP0yKDCsXhm91oZ5N5Ce9oHegD2cu0eOW8qN70s5HWC+r9BXMJV5/Fwj7ae+cLGVD5YwIJMK7JpNG9CEH7YuKOy7V2sINJTT2n0p/7HMAb66VfzWFF+2W0MquPvB/t+l4zKb74wtAKOrDoTH30xO4IrgFgQ0pGAqTM8bR61qvVFKE+nnemCJ334aessN8x5Bn8toP4CBLFnFlVLLRLLGGNb/dQ2FIKNKYsqgSpWTu8F/arVa93ny8lQJc4uonESGT036gUoK9oHQbhWNaH6FHBRYZSrmrFJh1RgTpNGgqZyKu4r2IWCgSVT9q4ud0Pki8cGPailh8A/6kp+fjG5qH7mGIghqZyFbOn6p0lK9XC4fhgmub34TIZL6QGD4jvZw3HhvxQeXn5RfmkJj6UCaSP9rvY2T52utyeieFyDzv4oA7bsfLhg5CfSscjr69tzvP38b3RxEYAiXzkJ16AmBS3BR1f/el+nTAxF6pIsTATLOOonvmFu+c/dxAhIueuewB/38CvkQxw2QXWcaxoefq3k38LqIqt7nuIzNltPWhs3AmwtiBFqYF0HDO2nBDtZm1FfOwUeFGhAH0H7VaYNG+e9d4neqPBsSiCDmH4PPkeaoGi6REbT3tAkTEU/b71sZPle6jD34Nd2EgCLPo/vhWegnehN+chp/yE4Eh+0FU5Y3IpLJ5KiXy1XAf/UvS8A1F7dsNIspf3l3hEBtnRQFXNlv98xJGBix96YORx+RiwNnTcnduWT5aIJFQFfADRsiYhDQq4cgv8o7tdJXYAzakoAHOIm91QN2veZNhBP7LqEqP3+Ey6Dc69eXOIJ02hSoUu9dvgZ+pP+95Pt5F8lY5a7+PktSRuFpDTM1K/sNvOapSgyWGk3j/bsMECKehbAFcxJGJ7GggdBjU5QQYj/uNS9LycKSg1nSDAdjCZBNviZ2p8BEL+oO0xWelSYfIuG4g+GQOWQFK4h5UWMNXAoeASJyGt92nNxWnHODn/CT8iDAlMjqRcQUSK9hhjLJUw0VZa97EYb7lA8EmAxPm4FYnc4EanaebaFl/h9JgpSVXqFQ4TLStZ2p0iMwwL0GUqAUd2l+S0lW7QtvHcOg5LEjwWUvp0GwSdNbCnHjxu5Fs2VsD9+pNjEZvk9VFc2qzFEZJitjD1VlZT+UB7CK7RWpAKAO7ZuaKJLxDejkXLNxEjbzo1ia39oBj2neyCSlFwqbcM0AOWrwbZoPg36OE3QAPH2BUwkgStNQ+1XlqFbtPRbbFdBMQLotpdFDJpUvk++1jF2tm0n4cTxL5YqU3PkE9nehrD2nF1ksot6W3yl92l+kSDGqfkx1T5gpbOXBIwX2EG3eLE3pMJn+KLoIFOb4qu3r+0Td7NEnwoautZiZ1MTxgasqYM2o1z/KM5u5lp8WDvUglqL9A+logSmrjPcmISa4ex2IYd6HmfiJD9bMLXZ2RgflJaZGVR6K55QgbiNXkaNRfqc929upGzAwfqrMpIXvl+4gIC5iroHRiceFnBOwoREtHMvi8SIdNpgeZfgH/X2xU2CG4465CL5ioGJFh0dEPIvy5MY5HHhB0UUEqwnSfAl1luuD19+fLZ2l5uik05ls1Ua/5eTz2uq0uSXvGlT032fsNN5qDKvBSb+Sd4XyNBbbTKAYV/JrKNOX7TaS4DdKd4qsMthSklWg9DHKb6JSj2yVl6XkS74NxSoPW80Spb1D3WPJ6GU7QVYiiE/zHhsYxXZtiPgpP0lOok5r26TNXNKs64FXwq73lM7wHhqGdOgLH0kRRzEHB69JR+cLLpH56VfkNEUNImzaq7b++7Lz4HF3D7lF+tXInMmEyVZfFOf1AgbRP1gkblIljWeP88IxUEAGB1qWlfnRV4hD9yBhfJro8Sf4pOgeQr/CU49eb6YWDjqYo3x1VqNBUa/GBa1dvw8EHHRyyoW7hzh4WJbGUZ6UnQEp7MoIxH/iW2VpGjxxQN3XZKFMYG7xs2avQJkaQ8yY/LJkb3iMfIM6S3Udk8Izj+FF8xoCE5X3FvBXyjkYFicmEPEOyu9TDTOW3pFdeQ0u1RnTSyUgbopGWcRWvI1RjjC8aQO2No2DbPAFGgKjFF+zn1MFX8LZr4s2hwumqllPDDqiJOjGFm1w0a+vrLWQfqkneJYnL4Yfka+X7xzBPv4VwX6CutwblBKTU4bft/JCHj9przkxTo76AhanUJOg8OPU0XIN4C/EmlxrkSZdQkfHjh55MgeVdJs2Jh1/ZVUDaEc446SoU6SiWzcU6vBx9woUfhKiXdcmvTLcitM3T528kdEkhLbL4yLlffOtT/lNqIXTLJnt7hCb1VyxmQRLWlRCzMO9vJNJnCg1L3rTW2w1RfHq6c+RtohStnbNZVDynI8r0ltS1AW5EBpeNNpv7hSUVapj5ed8v4QWA6/oiCYd/eBRVvq7RfpAqCa5w04/ndDiEtL4LMQamdc1VEnrv3W2cJhRGaxJnJug/QOlnV766bdiKr4SnHwOzdHIo+KzBn3flRhLXncOc9jhI72N8pYVYtla4TgqbhncKBzt6C4CMs2RreimaCIWzKPoVtEVvtp3H7ZcTTRbi2UA6aioWtBgph9hhPJkx/ohGreMyQYJbwtZBR5kRSWXoeaffVnpAXnpVbKSMW3mlCoPqSDFKrr/ijR/iAxyR0vTrRv65DDgIIV+kwd4IHeuu9JEfc9CiWnClF5uyRw/mnKsjC/S8MTI27Gj/+xmacizEf1icuRZFLrrwQUXzadEL7KVlYGHRXvPZWBrxl5MgLyRYtSNPmv5KAh0ys+7CAhaM0lzR6JHTVro3A4CWzEqMSxDfUN0wqmHBQFf08SwNgysbbXrrTnF0tCsa6GclKXtkn6L+JQLC9R3vu7UXUPgPZcT9jOJCNPdGIogu9LU/Nus2POxsuuKFCGnGF7olkpGjzvJB4xEt1xYrvwHsqdC6hSf6XIwpu7J25HfpLNQ9cwqY6+QhGSqxRZMHr/sJCEhl8axHWPRX0QUcRfgpT7pJgHWqdwVb5adT8N82YqS10Xyd7BBrvQTKLVziDgNjTV0oh4RRTwQp32tNg91NYUw4C1BJ4YLZzVSHRaJWUDCkTZzUoZnO8nHybUeF4BSVB6K3aF0+SzS+adUf2eVofNfpXRUyjEJqZL6sMCIOLlLjV/7vpOEJDYiC8nkeZ9sdhb4817dqL1hhz3ttJiS2nVWoP/+iQTs6ZQLl6/XEPjx2JDQud5NwlrDlNA5727+JTC1XhdcoZ4ZUGfxO1PAov1xxfAkuKVkeSI23Y2Fnw4MLZVHu53PNA8MCcHiFzAHyFvuU99weZUHbeEpXhqehUwpw2jMI8UNzM01JQSX39xJwu6BvldgPK0CM8a5Byvk6A4hPDHKCoCBuv26b9RVgrgMIsUNlQHw06FGaoAUNrr7lFCyIlqf0TVlmChg1vruxTpb8ljSUy7wcYizyhcbggzwVPpZH+j5wa4Smnda2HrLxfEeBc1qaIwka+k2MLPvGHfEN3mPAU5zmgUla01Zt6zrtixiGVaDmhI6myTEQlOXiLGRXYNAqdX0FrSP0gfjTHc+hR0wNmT5fcU5OOlWDdq2bwnX+1dKs6rLJ/0QDMLCzl22trnPcnof5q81+GBs1mfAcxIyuZuWbruG85Om+0gvnGVSncaY880NG9hJNx/uSyXDW6CFYnUMmpfQ37OEzgYJYaUyO6qtDWPlcVYbltc8mIxevgpFOUn5QayLFE0JgYMc7OYtmgeGU2byfxt+waXdJ/MoGo9PXExQ5EcNyxpPQ8cMFSF6+V6jq5cQV96UsIiHXidhQ5dQAu/Y4K4o16IRvEbo+EfDpUyWYnnohZEkmaP0uKYkDyU0TvOd6m7Ha3HdDMZZfa1OQPTf02w5A5rilF5WhMzZecxLKvOFNqxxsUZJORnWdU+7K/MmeqrNSZi/gUHQftkcbZJUm3T5gTGWcnlGecWrpiQ3q/Nn4IwGGvNWyJZ2w//0JVRY/rD247Wb3I1Cp9QTwfIiWZ7paa+Tl5AlsOyrADv627k2ol2LalxyYpZcOsc90LnlAQ6KcXto3FoGDTxbmwWlAT97vzb6U1fqD/ADvlS3A/J4rH3ST3fL07jkPqdE0Q/iiqVDxsv1vXNHL3OFYZ+vX3MixAOYa+UnRj/tp6YQSzN6oKVfDNK2ZYHdooQj49gCIjrw3mL55AbeRZkZ94CYiq7WZ62wNPY29JmetZEJU+mfMV26htSNr/VsYqHEwBrANtHL0RLlOwdDb7llDLxuC4+ztdyF71S7649c8BgdSJ4RCmOpruqMlhcuCjJsGMmRo90cPicD3RCA8Wcr9V7UsGjDT/SY7/hu+UpoIsIETCqGw8iujTqV8dKp4dSoxk2c77tdusDCXMcEqOlCogGrnmh8Ob+vMB9s4kMo1AazXyR7PIvy11JBU6sX2X0NPap08RbJjVE0rn7sVlBD3Vo117ef9hZO7MC4Un5/bpgLEFA2sLyyQG61W83dhM3WsdoXAdesWgA2joqHivHRzmRHCUlwkqsLlarVzFs5HMhtRxpnuyDg8S0tVP4myOTc7ASMKwT8uSJiDK85nyZ63MLK/d2eWABeNcpXvibyMq/6wosvS0ha9ZM9X0KoxwtcyMCJvFwos8bs803XSO7g95OOvmeZutn1GSkvV1yd5WoOR/kYtTvFY0umF6VIBUETEPECIoLyNVvmlQzG8Gqsuu4bE0HpsCWNe3rhqNghykrMr107xq1DMKjll9jLHjdExQECMK6GMp/Cdg7vC3cD/G1Qln7+fF+BLxij589k4DwQ/VMtcMHyrywFv4uEbsDpFT7UoqkffNs+nj4TD4hV4OGl5i/5gpRsdv9uFi2SoIErxKjkLFyPShRrfM3OK2kAhIKOnzT+kb2Wdb3z1SCQcFDypXm9TkoZ1meTJga1tYerRqQWC4BZfVBYf9xAcBFP2/nSKeZL30+f7tCnUxo/XFbM6iomw22qsZcCM7f8tO3oVhJ4mUp8P0oPrmeX3+uleTYpV33IKo+CL+evSyTEz9Fua/HSsI/XONPyl8fH0axaCfN7Vdb7u0qYPZlzZ1wgZJhJz7qWKgyzPC5zHLM2D6K2WVzkvFMXkw4aRo71rTfoIUzTCLrKa7E8vsrWYCcJEc3Wxveucj0nyd9bs0Wwzo8df3WN32IvSlZ2Y90/IT6VtntRiKmjNXmIFQiICDANWfxlH5YWt9brQePv7cLdIpLsIZqtuwlobeos7MXVAgKf2dPNLjCnjeXXzVeg3PsFN8zxEn/3701v3L1Dlkbb3UxaA8yIwY7f9KhaNq+SJY1PdEUaYH0v+BzqM1433fwGVfa45nUc7ElCl4raNFLO6lpmDQr8BOyoX1QfSgZ1oDJyg2nL3jitD+m+rqsDo/C6SJc2mxswhY07Ufw+zUJXgZgc4FOhG7pKfFnueXt7KBK0h9J+q+2313ebdV2fzJ8F/rXOMcYFETetYeKwDmzC/d3Hz/Ka/ado8z4MWwPhekHg/qKaYk/0oZVs2g+y84KvMe3rTSyMlFyXdqfnbOH9nXcofFTlBAI64bpkQ8nImr6QKQ5v0uy53sQxXzTBVEdm1Fn9Ed/N2u8LypyI2qihGOwAxvIXXvHx2OyJy3gvj1OK5uU5XmtiWOsgjTnM/io8mvDCle+FwTHh8nBz7GRVMvlAzvFleD4dbnXpdRVQU3kPIk6GmXBtMvGtSJjcdn3a9z7gBWzwcKD5vHfaCRf9okza5e9jvq/XVCAqId3bcprTFQkT6ajDmwkX5qNGewPH961rk1njPDVfHQ3To8sB3u3esWz+J2CPCTK8PSpF2sYHBY1KR9NJLDCc2ENEsYDsMUOC1Kp33zqoHB8fR2F4HJYO6rNeNzP0e9r6WGuDmVHo6KQB/eAD7VEUVQ6e7nv9+YEV1uHuo6vl/WfP6HcvJp9Gn29vR5++DeenzB/RI6XNi94oe2d/1Hvo7vVJoTW9cnwD860v/Ep/maRt7Itqtis7Kv8dz13jbUgsOcdTz6xoG+nvx0iYvaznujy7f0ffXlL8DQgEvpE4f4d0vnowhA95NxVzeVmiG//gBY7f9H9JoO//fs1k/vxu73Bf+3qbv98joYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYXFGvwf8Dk6JWIknV4AAAAASUVORK5CYII="
    },
    {
      company: "Amazon",
      posted: "2 days ago",
      title: "UI Designer",
      type: "Remote",
      level: "Senior Level",
      rate: "$110/hr",
      location: "Remote",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMnYPXIDmRTKpj1drsmIRD_0NJJLVIVnMJNA&s"
    },
    {
      company: "Apple",
      posted: "4 days ago",
      title: "Visual Designer",
      type: "Contract",
      level: "Mid Level",
      rate: "$95/hr",
      location: "Islamabad, Pakistan",
      image: "data:image/png;base64,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"
    },
    {
      company: "Figma",
      posted: "7 days ago",
      title: "Product UI Specialist",
      type: "Full-Time",
      level: "Senior Level",
      rate: "$105/hr",
      location: "Karachi, Pakistan",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
    },
    {
      company: "Adobe",
      posted: "3 days ago",
      title: "Creative Designer",
      type: "Part-Time",
      level: "Mid Level",
      rate: "$90/hr",
      location: "Lahore, Pakistan",
      image: "https://cdn-icons-png.flaticon.com/512/5436/5436949.png"
    },
    {
      company: "Dribbble",
      posted: "1 day ago",
      title: "UI Specialist",
      type: "Remote",
      level: "Senior Level",
      rate: "$100/hr",
      location: "Remote",
      image: "data:image/png;base64,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"
    },
    {
      company: "Behance",
      posted: "6 days ago",
      title: "Graphic Designer",
      type: "Full-Time",
      level: "Mid Level",
      rate: "$75/hr",
      location: "Islamabad, Pakistan",
      image: "https://img.freepik.com/premium-vector/vector-behance-apps-logo-rounded-asset-isolated_1004619-456.jpg?semt=ais_hybrid&w=740&q=80"
    },
    {
      company: "Upwork",
      posted: "Today",
      title: "Freelance UI/UX Designer",
      type: "Freelance",
      level: "Any Level",
      rate: "$65/hr",
      location: "Remote",
      image: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Upwork_Logo.svg"
    }
  ];

  return (
    <div className='parent'>
      {jobs.map((x, index) => {
        return <div key={index}>
          <Card
            company={x.company}
            posted={x.posted}
            title={x.title}
            type={x.type}
            level={x.level}
            rate={x.rate}
            location={x.location}
            image={x.image} />
        </div>
      })}
    </div>
  )
}

export default App
