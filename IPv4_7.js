function __() {
    const interfaces = require("os").networkInterfaces()
    const address = Object.values(interfaces)
        .flat()
        .find((__iface__) => {
            return __iface__?.family === "IPv4" &&! __iface__?.internal;
        })?.address || "127.0.0.1";
    
    return address;
}


__() // Start with IPv4 function 

