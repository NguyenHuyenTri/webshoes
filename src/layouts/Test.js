import React from 'react';
import SrollData from "views/Admin/Page/ScrollData";


import {dataScrollHome} from "variables/slide";
import {productList} from 'variables/product'

    const dataConfig = {
        datalist:dataScrollHome,
        dataProduct:productList,
        local:'localScrollHome',
        title:'The Latest & Greatest',
    }

export  default  function App () {



    return(
        <SrollData {...dataConfig}  />
    )

}