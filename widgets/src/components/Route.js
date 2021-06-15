import { useEffect, useState } from "react";

const Route = ( {path, children}) =>
{
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    //Generally, generic/default event listeners only need to be defined once in the component, hence the usage of the empty array [] as the second parameter.
    useEffect( () =>
    {
        const onLocationChange = () =>
        {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener('popstate', onLocationChange);

        return () =>
        {
            window.removeEventListener('popstate', onLocationChange);
        };
    }, []);

    return currentPath === path
            ? children
            : null
};

export default Route;