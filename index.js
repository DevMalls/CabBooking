let cab = [];
bookcab = () => {
  const employeeRole = document.getElementById("role").value;
  const employeeLocation = document.getElementById("location").value;
  if (cab.length === 0) {
    cab.push({ role: employeeRole, location: employeeLocation});
    console.log("1st person booked the cab");
    alert("Cab Booked successfully");
  } 
  else if (cab.length <= 3) {
        let frontEnd = cab.filter((c) => {
        return c.role === "Front End Developer";
        });
        let backEnd = cab.filter((c) => {
        return c.role === "Back End Developer";
        });
            if ((frontEnd.length < 4 && backEnd.length === 0 && employeeRole === "Front End Developer") ||  
            (backEnd.length < 4 &&  frontEnd.length === 0 && employeeRole === "Back End Developer") ) {
                console.log("Logic 100%");
                cab.push({ role: employeeRole, location: employeeLocation});
                alert("Cab Booked successfully");
            }
            else if((frontEnd.length <= 2  && backEnd.length < 2 && employeeRole === "Back End Developer")||
            (backEnd.length <= 2  && frontEnd.length < 2 && employeeRole === "Front End Developer") ){
                console.log("Logic 50%");
                cab.push({ role: employeeRole, location: employeeLocation});
                alert("Cab Booked successfully");
            }
            else{
                (employeeRole === "Front End Developer") ? 
                alert("Sorry seat is available for Back End Developer, Please select new cab for you"): 
                alert("Sorry seat is available for Front End Developer, Please select new cab for you") ;
            }
            
            
  }
  else {
    alert("All seats are filled");
  }
  console.log("Cab Booked Details: ",cab);
};
