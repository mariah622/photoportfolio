// pages component

import Photos from "./photos/Photo";
import Cameras from "./cameras/Camera";

export default function Pages({page}) {

    function renderPage(){
        switch(page) {
            case "Cameras":
                return <Cameras/>
            
            case "Photos":
                return <Photos/>
            
            default:
                break;

        }
    }
    return <div>
        {renderPage()}

    </div>
}