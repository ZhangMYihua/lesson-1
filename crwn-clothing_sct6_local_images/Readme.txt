Complete React Developer in 2020 (w/ Redux, Hooks, GraphGL) 
-----------------------------------------------------------

crwn-clothing project (sections 5-6) - LOCAL IMAGES

Local background images of categories and shop items are inside
of the 'images/' directory.  
This directory should be placed inside the 'public/' directory of 
the 'crwn-clothing' project.  

The 'shop.data.js' file is modified to include the local imageUrl, 
having the http links kept but commented out.  


I've also included a 'sections.data.js' file, which is just the 
categories data that Yihua has inside the Directory component, with
added local imageUrl for the local category images (again with the 
http links kept but commented out).  
This can either be used as a reference (for the local image links) 
to add to the 'sections' state props inside the Directory component,
or imported and used just like Yihua does for the 'shop.data.js' 
file in section 5 of the course. 

For example, in 'directory.component.jsx':  

-------------------------------------------------
import SECTIONS_DATA from "./sections.data.js";

(inside 'class Directory')

    this.state = {
        sections: SECTIONS_DATA
    }

    (etc)
-------------------------------------------------


