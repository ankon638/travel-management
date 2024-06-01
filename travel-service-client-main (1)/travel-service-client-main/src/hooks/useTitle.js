import { useEffect } from "react"

// Dynamic title 
const useTitle = title => {
    useEffect(() => {
        document.title = `${title}-travel service`;
    }, [title])
}

export default useTitle;