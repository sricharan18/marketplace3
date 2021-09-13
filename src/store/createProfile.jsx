const initialState = {
    CategorySelected : 0,
    isBasicDetailsFilled:false,
    isAdditionalDetailsFilled:false,
    isEmploymentDetailsFilled:false,
    token: null,
    modalSelected : '',
    skills : {
        skills : ["Python", "Java", "Graphic design"],
        edit : {id : null}
    },
    portfolio : {
        portfolio : ['url1', 'url2'],
        edit : {id : null}
    },
    employmentQues : {
        fields : {
            AvailableFrom : {AvailableFrom : "",},
            AvailableTill : {AvailableTill : ""},
            WorkType : {WorkType : ""},
            EmploymentType : {EmploymentType : ""},
            WorkLocation : {WorkLocation : ""},
            LocationPreference : {LocationPreference : ""},
            WorkingHours : {WorkingHours : ""},
            Rate : {Rate : ""},
            RateType : {RateType : ""}
        },
        formValid: true,
    },
    fields:{
        fields:{
        Name: {Name : '', inValid : false},
        Email: {Email : '', inValid : false},
        PhoneNumber: {PhoneNumber : '', inValid : false},
        profilePic: undefined,
        Gender: {Gender : '', inValid : false},
        DOB: {DOB : '', inValid : false},
        Category: "",
        Sub_Category: '',
        ID_Proof: {ID_Proof : '',},
        ID_Code: {ID_Code : '',},
        Status: {Status : '',},
        Language: {Language : '',},
        CurrentLocation: {CurrentLocation : '',},
        },
        errors : {
            Name: "",
            Email: "",
            PhoneNumber: "",
            DOB: "",
        },
        errorsdup : {
            Name: "Enter valid Name",
            Email: "Enter valid email",
            PhoneNumber: "Enter valid mobile number",
            DOB: "Enter Date of birth",
        },
        formValid: false,
    },
    educationalDetails :{
        fields : {
            Degree : {Degree : "", invalid : "false"},
            PassingYear : {PassingYear : "", invalid : 'false'},
            CurrentlyStudying : {CurrentlyStudying : false},
            University : {University : "", invalid : 'false'},
            Grade : {Grade : "", invalid : 'false'},
        },

        educationalDetails : [{
            Degree : {Degree : "", invalid : "false"},
            PassingYear : {PassingYear : "", invalid : 'false'},
            CurrentlyStudying : {CurrentlyStudying : false,},
            University : {University : "", invalid : 'false'},
            Grade : {Grade : "", invalid : 'false'},
        },],
        formValid: false,
        edit : {id : null},
        errors : {
            Degree: "Enter valid Degree",
            PassingYear: "Enter valid PassingYear",
            University: "Enter valid University",
            Grade: "Enter valid grade",
        },
        errorsdup : {
            Degree: "Enter valid Degree",
            PassingYear: "Enter valid PassingYear",
            University: "Enter valid University",
            Grade: "Enter valid grade",
        },
    },
    workDetails : {
        fields:{
            EmployerName : {EmployerName : "", invalid : "false"},
            Designation : {Designation : "", invalid : "false"},
            StartDate : {StartDate : "", invalid : "false"},
            EndDate : {EndDate : "", invalid : "false"},
            WorkLocation : {WorkLocation : "", invalid : "false"},
            CurrentlyWorking:{CurrentlyWorking : true,},
        },
        workDetails : [{
            EmployerName : {EmployerName : "TCS Company", invalid : "false"},
            Designation : {Designation : "UI Designer", invalid : "false"},
            StartDate : {StartDate : "2016-06-01", invalid : "false"},
            EndDate : {EndDate : "2018-06-01", invalid : "false"},
            WorkLocation : {WorkLocation : "Hyderabad", invalid : "false"},
            CurrentlyWorking:{CurrentlyWorking : false,},
        }],
        edit : {id : null},
        errors : {
            EmployerName: "Enter valid Name",
            Designation: "Enter valid Designation",
            StartDate: "Enter valid Date",
            EndDate: "",
            WorkLocation: "Enter valid Work Location"
        },
        errorsdup : {
            EmployerName: "Enter valid Name",
            Designation: "Enter valid Designation",
            StartDate: "Enter valid Date",
            EndDate: "Enter valid Date",
            WorkLocation: "Enter valid Work Location"
        },
        formValid: false,
    },
    certifications : {
        fields:{
            Name : {Name : "", invalid : "false"},
            Issuer : {Issuer : "", invalid : "false"},
            IssueYear : {IssueYear : "", invalid : "false"},
            ExpiryYear : {ExpiryYear : "", invalid : "false"},
        },
        certifications : [{
            Name : {Name : "", invalid : "false"},
            Issuer : {Issuer : "", invalid : "false"},
            IssueYear : {IssueYear : "", invalid : "false"},
            ExpiryYear : {ExpiryYear : "",invalid : "false"},
        }],
        edit : {id : null},
        errors : {
            Name: "Enter valid Name",
            Issuer: "Enter valid Issuer",
            IssueYear: "Enter valid IssueYear",
            ExpiryYear: "Enter valid ExpiryYear",
        },
        errorsdup : {
            Name: "Enter valid Name",
            Issuer: "Enter valid Issuer",
            IssueYear: "Enter valid IssueYear",
            ExpiryYear: "Enter valid ExpiryYear",
        },
        formValid: false,
    },
    recommendations : {
        fields:{
            Name : {Name : "", invalid : "false"},
            Email : {Email : "", invalid : "false"},
            PhoneNumber : {PhoneNumber : "", invalid : "false"},
        },
        recommendations : [{
            Name : {Name : "", invalid : "false"},
            Email : {Email : "", invalid : "false"},
            PhoneNumber : {PhoneNumber : "", invalid : "false"},
        }],
        edit : {id : null},
        errors : {
            Name: "Enter valid Name",
            Email: "",
            PhoneNumber: "",
        },
        errorsdup : {
            Name: "Enter valid Name",
            Email: "",
            PhoneNumber: "",
        },
        formValid: false,
    },
}

const reducer = (state = initialState, action) => {
    // const newState = {...state}
    const newState = JSON.parse(JSON.stringify(state))

    switch (action.type){

        case "CHANGE_CATEGORY" : 
                // console.log(action.val)
                // newState.CategorySelected = action.val;
                newState.fields.fields['Category'] = action.item
                // let f={...newState.fields.fields}
                // f['Category']=action.val;
                // if(action.val  ==='HealthCare'){
                //     f['Sub_Category']='Administration'
                // }
                // else if(action.val==='Blue Collar'){
                //     f['Sub_Category']='Driver'
                // }
                // else{
                //     f['Sub_Category']='FrontEnd'
                // }
                // newState.fields.fields=f
                break;

        case "CHANGE_FIELD":
                let f1={...newState[action.data].fields}
                f1[action.name]=action.val;
                newState[action.data].fields=f1
                break;

        case "ADDITIONAL_DETAILS":
                newState.goToAdditionalDetails = true;
                break;

        case "IS_FORM_VALID":
                var keys = Object.keys(newState[action.data].errors);
                var c = 0
                for (var i=0; i < keys.length; i++){
                    var t = keys[i]
                    if(newState[action.data].errors[t] !== ""){
                        c = 1
                        newState[action.data].fields[t].inValid = true
                        console.log(newState[action.data].errors[t])
                    }
                }
                if ( c === 0){
                    newState[action.data].formValid = true
                }
                // console.log(newState.fields.formValid)
                break;

        case "CHANGE_ERROR_STATE":
                if (action.val){
                    newState[action.data].errors[action.field] = ""
                } else {
                    newState[action.data].errors[action.field] = newState[action.data].errorsdup[action.field]
                    newState[action.data].formValid = false;
                }
                break;

        case "ADD_DETAILS":
            let edit = newState[action.data].edit.id
            if (edit !== null){
                newState[action.data][action.data] = newState[action.data][action.data].map((item, id) => {if(item.id===edit){return action.val} else{return item}})
                newState[action.data].edit.id = null
                newState[action.data].errors = newState[action.data].errorsdup
            } else {
                newState[action.data][action.data] = newState[action.data][action.data].concat(action.val)
                console.log(newState[action.data][action.data])
            }
            break;
        case "DELETE_DETAILS":
            newState[action.name][action.name] = newState[action.name][action.name].filter((item, id) => id !== action.id)
             
            break;

        case "EDIT_DETAILS":
            var obj1 = newState[action.name][action.name].filter((val) => {if(val.id.id === action.id){return (val)}})
            // var obj1 = JSON.parse(JSON.stringify(newState[action.name][action.name].));
            // var ob = Object.assign({}, newState.educationalDetails.educationalDetails[action.id])
            newState[action.name].fields = obj1[0]
            Object.keys(newState[action.name].errors).map((val) => {newState[action.name].errors[val] = ""})
            // newState.educationalDetails.errors = {}
            newState[action.name].edit.id = action.id
            break;

        case "RESET_FORM":
            if(action.data)
            {
            var obj = JSON.parse(JSON.stringify(newState[action.data].fields));
            Object.keys(obj).map((val, id) => { 
                    if(typeof(obj[val][val]) == "boolean"){obj[val][val] = false}
                    else {obj[val][val] = ""}})
            Object.keys(newState[action.data].fields).map((val, id) => {newState[action.data].fields[val].inValid = "false"})
            newState[action.data].fields = obj
            newState[action.data].formValid = false;
            newState[action.data].errors = newState[action.data].errorsdup
            }
            break;

        case "EDIT_ACTION":
            if(action.data)
            {
            newState[action.data].edit.id = null
            newState[action.data].errors = newState[action.data].errorsdup
            }
            break;

        case "MAP_DATABASE_TO_LOCAl":
            var data = null
            switch (action.name){
                case "educationalDetails" : data = [action.res][0].map((item, id) => {
                    return ({id : {id : item.id},Degree : {Degree : item.degreeName, invalid : "false"},
                                    PassingYear : {PassingYear : item.yearOfPassing, invalid : 'false'},
                                    CurrentlyStudying : {CurrentlyStudying : item.isComplete, invalid : 'false'},
                                    University : {University : item.institute, invalid : 'false'},
                                    Grade : {Grade : item.marks, invalid : 'false'}})
                    })
                    break;
                case "certifications" : data = [action.res][0].map((item, id) => {
                    return ({id : {id : item.id},
                        Name : {Name : item.certificateName, invalid : "false"},
                        Issuer : {Issuer : item.issuer, invalid : "false"},
                        IssueYear : {IssueYear : item.issueYear, invalid : "false"},
                        ExpiryYear : {ExpiryYear : item.expiryYear,invalid : "false"},
                    })
                    })
                    break;
                case 'workDetails': data = [action.res][0].map((item, id) => {
                    return ({id : {id : item.id},
                            EmployerName : {EmployerName : item.companyName, invalid : "false"},
                            Designation : {Designation : item.jobTitle, invalid : "false"},
                            StartDate : {StartDate : item.startDate, invalid : "false"},
                            EndDate : {EndDate : item.endDate, invalid : "false"},
                            WorkLocation : {WorkLocation : item.employeeLocations, invalid : "false"},
                            CurrentlyStudying:{CurrentlyStudying : item.isCurrent,},
                    })
                    })
                    break;
                case "recommendations": data = [action.res][0].map((item, id) => {
                    return ({id : {id : item.id},Name : {Name : item.name, invalid : "false"},
                    Email : {Email : item.enmail, invalid : "false"},
                    PhoneNumber : {PhoneNumber : item.phone, invalid : "false"},
                    })
                    })
                    break;
                case "skills":  data = [action.res][0].map((item, id) => {
                    return ({id : {id : item.id}, item : item.skillName
                    })
                    })
                    break;
                    
                case "portfolio": data = [action.res][0].map((item, id) => {
                    return ({id : {id : item.id}, item : item.portfolioURL
                    })
                    })
                    break;
                case "fields" : data = [action.res].map((item, id) => {
                    return ({Name : {Name : item.firstName, invalid : "false"},
                                    Email : {Email : item.email, invalid : 'false'},
                                    PhoneNumber : {PhoneNumber : item.primaryPhone, invalid : 'false'},
                                    CurrentLocation : {CurrentLocation : item.workerLocation},
                                    Gender: {Gender : item.gender, inValid : false},
                                    DOB: {DOB : item.dateOfBirth, inValid : false},
                                    Category: "",
                                    ID_Proof: {ID_Proof : item.idProof,},
                                    ID_Code: {ID_Code : item.idCode,},
                                    Status: {Status : item.status,},
                                    Language: {Language : item.language,},

                            
                                        })
                    
                    })
                    data = data[0]
                    console.log(action.res2)
                    if (action.res2){
                        data["Category"] = action.res2.parent.name
                        data["Sub_Category"] = action.res2.name 
                    }
                    
                    break;
                case "employmentDetails" : data = [action.res.jobPreference].at(-1).map((item, id) => {
                    let rate=0
                    let rateType='Select'
                    if(item.dailyRate!==0)
                    {
                        rate=item.dailyRate;
                        rateType='Daily Rate'
                    }
                    if(item.hourlyRate!==0)
                    {
                        rate=item.hourlyRate;
                        rateType='Hourly Rate'
                    }
                    if(item.monthlyRate!==0)
                    {
                        rate=item.monthlyRate;
                        rateType='Monthly Rate'
                    }
                    return ({AvailableFrom : {AvailableFrom : item.availableFrom},
                    AvailableTill : {AvailableTill : item.availableTo},
                    WorkType : {WorkType : item.engagementType},
                    EmploymentType : {EmploymentType : item.employmentType},
                    Rate : {Rate : rate},
                    RateType : {RateType : rateType},
                    WorkLocation : {WorkLocation : item.locationType},
                    LocationPreference : {LocationPreference : ""},
                    WorkingHours : {WorkingHours : item.hourPerDay},
                                        })
                    })

                    console.log(data)
                    newState.employmentQues.fields=data.at(-1);
                    break;
                default:
                    break
            }
            if(action.name!=='employmentDetails')
            {
                newState[action.name][action.name] = data
            }
            break;

        case "CHANGE_MODAL":
            newState.modalSelected=action.modal;
            break
        
        case "ON_FILLED":
            if(action.data==='basic')
            {
                newState.isBasicDetailsFilled=true;
            }
            else if(action.data==='additional')
            {
                newState.isAdditionalDetailsFilled=true;
            }
            else{
                newState.isEmploymentDetailsFilled=true;
            }
            break;
        
        case "GET_EMAIL":
            newState.fields.fields.Email.Email = localStorage.getItem("email")
            break;

        // case "SET_WORKER_ID":
        //     newState.workerID = action.id
        //     break;

        default :
            break;

        
    }
    return newState
}

export default reducer;