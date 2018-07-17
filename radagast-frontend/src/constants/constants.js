exports.userOptions = [
    {
        text: "Administrator",
        value: "ADMIN"
    },
    {
        text: "Shipper",
        value: "SHIPPER"
    },
    {
        text: "Inbound Officer",
        value: "INBOUND_OFFICER"
    },
    {
        text: "Dispatcher",
        value: "DISPATCHER"
    },
    {
        text: "Customer Support",
        value: "CUSTOMER_SUPPORT"
    }
];

exports.sampActContents=[
  {
    id: "1",
    account_number: "1001004",
    company: "ACOMMERCE",
    delivery_time: "8:00 A.M. - 5:00 P.M.",
    pickup_time: "8:00 A.M. - 5:00 P.M.",
    date_updated: "MAY 07, 2018",
    updated_by: "KIM CASIA"
    },
    {
    id: "2",
    account_number: "1001023",
    company: "COMPANY A",
    delivery_time: "8:00 A.M. - 5:00 P.M.",
    pickup_time: "8:00 A.M. - 5:00 P.M.",
    date_updated: "MAY 08, 2018",
    updated_by: "KIM CASI0"
    }
 
];
exports.sampDeactContents=[
  {
    id: "1",
    account_number: "1001004",
    company: "ACOMMERCE",
    delivery_time: "8:00 A.M. - 5:00 P.M.",
    pickup_time: "8:00 A.M. - 5:00 P.M.",
    date_updated: "MAY 07, 2018",
    updated_by: "KIM CASIA",
    reason: "sick"
  },
  {
    id: "2",
    account_number: "1001023",
    company: "COMPANY A",
    delivery_time: "8:00 A.M. - 5:00 P.M.",
    pickup_time: "8:00 A.M. - 5:00 P.M.",
    date_updated: "MAY 08, 2018",
    updated_by: "KIM CASI0",
    reason: "leave"
  } 
];

exports.generalTable=[
  {
    type: "pricings",
    header:["PACKAGE TYPE", "ORIGIN", "DESTINATION", "PRICE", "DATE UPDATED"]
  },
  {
    type: "area-managers",
    header:["NAME", "EMAIL", "CONTACT NUMBER", "DC", "HUB","DATE UPDATED"]
  },
  {
    type: "dispatchers",
    header:["NAME", "EMAIL", "CONTACT NUMBER", "DC", "HUB", "DATE UPDATED"]
  },
  {
    type: "customer-supports",
    header: ["NAME", "EMAIL", "CONTACT NUMBER", "DC", "HUB", "DATE UPDATED"]
  },
  {
    type: "clients",
    header: ["ACCOUNT NUMBER", "COMPANY", "DELIVERY POSITIONING TIME", "PICKUP POSITIONING TIME", "DATE UPDATED"]
  },
  {
    type: "hubs",
    header: ["CODE", "NAME", "ADDRESS", "COUNTRY", "REGION", "PROVINCE", "DISTRICT", "SUB-DISTRICT", "DATE UPDATED"]
  },
  {
    type: "dc",
    header: ["CODE", "NAME", "ADDRESS", "COUNTRY","REGION", "PROVINCE", "DISTRICT", "SUB-DISTRICT", "BARANGAY", "DATE UPDATED"]
  },
  {
    type: "zones",
    header: ["CODE", "BARANGAY", "SUB-DISTRICT", "DISTRICT", "PROVINCE", "REGION","DATE UPDATED"]
  },
  {
    type: "vehicles",
    header: ["PLATE NUMBER", "MODEL", "WEIGHT(KG)", "ASSIGNED COURIER", "DATE UPDATED"]
  },
  {
    type: "countries",
    header: ["CODE", "NAME", "DATE UPDATED"]
  },
  {
    type: "regions",
    header: ["CODE", "NAME","COUNTRY", "DATE UPDATED"]
  },
  {
    type: "provinces",
    header: ["CODE", "NAME", "REGION", "COUNTRY", "DATE UPDATED"]
  },
  {
    type: "districts",
    header: ["CODE", "NAME","PROVINCE", "REGION", "COUNTRY", "DATE UPDATED"]
  },
  {
    type: "sub-districts",
    header: ["CODE","NAME","DISTRICT", "PROVINCE", "REGION", "COUNTRY", "DATE UPDATED"]
  },
  {
    type: "barangays",
    header: ["CODE","NAME","SUB-DISTRICT", "DISTRICT", "PROVINCE", "REGION", "COUNTRY", "DATE UPDATED"]
  },
  {
    type: "couriers",
    header: ["NAME","CONTACT", "ZONE","ASSIGNED VEHICLE", "DATE UPDATED"]
  },
  {
    type: "bookings",
    header: ["BOOKING NUMBER","SHIPPER NAME", "PICKUP ADDRESS", "CONTACT NUMBER", "EMAIL", "PRODUCT TYPE", "CARGO TYPE", "MODE OF PAYMENT", "DATE UPDATED"]
  }
];

exports.deactGeneralTable=[
  {
    type: "pricings",
    header:["PACKAGE TYPE", "ORIGIN", "DESTINATION", "PRICE", "DATE UPDATED"]
  },
  {
    type: "area-managers",
    header:["NAME", "EMAIL", "CONTACT NUMBER", "DC", "HUB", "DATE UPDATED"]
  },
  {
    type: "dispatchers",
    header:["NAME", "EMAIL", "CONTACT NUMBER", "DC", "HUB", "DATE UPDATED"]
  },
  {
    type: "customer-supports",
    header: ["NAME", "EMAIL", "CONTACT NUMBER", "DC", "HUB", "DATE UPDATED"]
},
{
  type: "clients",
  header: ["ACCOUNT NUMBER", "COMPANY", "DELIVERY POSITIONING TIME", "PICKUP POSITIONING TIME", "DATE UPDATED"]
},
{
  type: "hubs",
  header: ["CODE", "NAME", "ADDRESS", "COUNTRY", "REGION", "PROVINCE", "DISTRICT", "SUB-DISTRICT", "DATE UPDATED"]
},
{
  type: "dc",
  header: ["CODE", "NAME", "ADDRESS", "COUNTRY","REGION", "PROVINCE", "DISTRICT", "SUBDISTRICT", "BARANGAY","DATE UPDATED"]
},
{
  type: "zones",
  header: ["CODE", "BARANGAY", "SUB-DISTRICT", "DISTRICT", "PROVINCE", "REGION","DATE UPDATED"]
},
{
  type: "vehicles",
  header: ["PLATE NUMBER", "MODEL", "WEIGHT(KG)", "ASSIGNED COURIER", "DATE UPDATED"]
},
{
  type: "countries",
  header: ["CODE","NAME", "DATE UPDATED"]
},
{
  type: "regions",
  header: ["CODE", "NAME", "COUNTRY", "DATE UPDATED"]
},
{
  type: "provinces",
  header: ["CODE", "NAME", "REGION", "COUNTRY", "DATE UPDATED"]
},
{
  type: "districts",
  header: ["CODE", "NAME", "PROVINCE", "REGION", "COUNTRY", "DATE UPDATED"]
},
{
  type: "sub-districts",
  header: ["CODE","NAME", "DISTRICT", "PROVINCE", "REGION", "COUNTRY", "DATE UPDATED"]
},
{
  type: "barangays",
  header: ["CODE","NAME","SUBDISTRICT", "DISTRICT", "PROVINCE", "REGION", "COUNTRY"]
},
{
  type: "couriers",
  header: ["NAME","CONTACT", "ZONE","ASSIGNED VEHICLE", "DATE UPDATED"]
},
{
  type: "bookings",
  header: ["BOOKING NUMBER","SHIPPER NAME", "PICKUP ADDRESS","PRODUCT TYPE", "CARGO TYPE", "MODE OF PAYMENT", "DATE UPDATED"]
}
];

exports.sidebarItems=[
    {
      menuName: "Dashboard",
      icon: "dashboard",
      route: "/home/dashboard",
      subMenu: []
    },
    {
      menuName: "Order Management",
      icon: "boxes",
      route: "/home/bookings",
      subMenu: []
    },
    {
      menuName: "Users",
      icon: "users",
      subMenu: [
        {
          name: "Courier",
          route: "/home/couriers"
        },
        {
          name: "Dispatcher",
          route: "/home/dispatchers"
        },
        {
          name: "Customer Support Representative",
          route: "/home/customer-supports"
        },
        {
          name: "Area Manager",
          route: "/home/area-managers"
        }
      ],
    },
    {
      menuName: "Data Management",
      icon: "database",
      subMenu: [
        {
          name: "Client Accounts",
          route: "/home/clients"
        }, 
        {
          name: "Hub",
          route: "/home/hubs"
        }, 
        {
          name: "Distribution Center",
          route: "/home/distribution-center"
        }, 
        {
          name: "Zone",
          route: "/home/zones"
        }, 
        { 
          name: "Vehicle",
          route: "/home/vehicles"
        }, 
        {
          name: "Country",
          route: "/home/countries"
        }, 
        {
          name: "Region",
          route: "/home/regions"
        }, 
        {
          name: "Province",
          route: "/home/provinces"
        }, 
        {
          name: "District",
          route: "/home/districts"
        }, 
        {
          name: "Sub-district",
          route: "/home/sub-districts"
        }, 
        {
          name: "Barangay",
          route: "/home/barangays"
        },
        {
          name: "Pricing",
          route: "/home/pricings"
        }
      ]
    }
];

  
exports.notifications = [
    {
      title: "Changes",
      time: "from Today",
      route: "/notif/1"
    }
];

exports.userMenuItems = [
    {
        user: "ADMIN",
        menuItems: [
            {
                name: "View Profile",
                route:  "/admin/view-profile",
                icon: "id card"
            },
            {
                name: "Change Password",
                route:  "/admin/change-password",
                icon: "edit"

            },
            {
                name: "Log Out",
                route:  "/admin/logout",
                icon: "log out"
            }
        ]
    },
    {
        user: "SHIPPER",
        menuItems: [
            {
                name: "View Profile",
                route:  "/shipper/view-profile",
                icon: "id card"
            },
            {
                name: "Change Password",
                route:  "/shipper/change-password",
                icon: "edit"
            },
            {
                name: "Update FTP",
                route:  "/shipper/update-ftp",
                icon: "linkify"
            },
            {
                name: "Log Out",
                route:  "/shipper/logout",
                icon: "log out"
            },
        ]
    },
    {
        user: "DISPATCHER",
        menuItems: [
            {
                name: "View Profile",
                route:  "/dispatchers/view-profile",
                icon: "id card"
            },
            {
                name: "Change Password",
                route:  "/dispatchers/change-password",
                icon: "edit"
            },
            {
                name: "Log Out",
                route:  "/dispatchers/logout",
                icon: "log out"
            }
        ]
    },
    {
        user: "INBOUND_OFFICER",
        menuItems: [
            {
                name: "View Profile",
                route:  "/inbound-officer/view-profile",
                icon: "id card"
            },
            {
                name: "Change Password",
                route:  "/inbound-officer/change-password",
                icon: "edit"
            },
            {
                name: "Log Out",
                route:  "/inbound-officer/logout",
                icon: "log out"
            }
        ]
    },
    {
        user: "CUSTOMER_SUPPORT_REPRESENTATIVE",
        menuItems: [
            {
                name: "View Profile",
                route:  "/customer-supports/view-profile",
                icon: "id card"
            },
            {
                name: "Change Password",
                route:  "/customer-supports/change-password",
                icon: "edit"
            },
            {
                name: "Log Out",
                route:  "/customer-supports/logout",
                icon: "log out"
            }
        ]
    }
];


exports.popupItems=[
  {
    type: "vehicles",
    subContents:[
      {
        name: "Update",
        route: "vehicles/update",
        icon: "pencil alternate"
      },
      {
        name: "Unassign Courier",
        route: "vehicles/unassign",
        icon: "male"
      },
      {
        name: "Reassign Courier",
        route: "vehicles/reassign",
        icon: "motorcycle"
      },
      {
        name: "Deactivate",
        route: "vehicles/deactivate",
        icon: "ban",
        status: "active"
      },
      {
        name: "Activate",
        route: "vehicles/activate",
        icon: "check circle outline",
        status: "inactive"
      }

    ]
  },
  {
    type: "clients",
    subContents:[
      {
        name: "Update",
        route: "clients/update",
        icon: "pencil alternate"
      },
      {
        name: "Deactivate",
        route: "clients/deactivate",
        icon: "ban",
        status: "active"
      },
      {
        name: "Activate",
        route: "clients/activate",
        icon: "check circle outline",
        status: "inactive"
      }
    ]
  },
  {
    type: "pricings",
    subContents:[
      {
        name: "Update",
        route: "account/update",
        icon: "pencil alternate"
      },
      {
        name: "Deactivate",
        route: "account/deactivate",
        icon: "ban",
        status: "active"
      },
      {
        name: "Activate",
        route: "account/activate",
        icon: "check circle outline",
        status: "inactive"
      }
    ]
  },
  {
    type: "hubs",
    subContents:[
      {
        name: "Update",
        route: "hubs/update",
        icon: "pencil alternate"
      },
      {
        name: "Deactivate",
        route: "hubs/deactivate",
        icon: "ban",
        status: "active"
      },
      {
        name: "Activate",
        route: "hubs/activate",
        icon: "check circle outline",
        status: "inactive"
      }
    ]
  },
  {
    type: "dc",
    subContents:[
      {
        name: "Update",
        route: "distribution-center/update",
        icon: "pencil alternate"
      },
      {
        name: "Deactivate",
        route: "dc/deactivate",
        icon: "ban",
        status: "active"
      },
      {
        name: "Activate",
        route: "dc/activate",
        icon: "check circle outline",
        status: "inactive"
      }
    ]
  },
  {
    type: "zones",
    subContents:[
      {
        name: "Update",
        route: "zones/update",
        icon: "pencil alternate"
      },
      {
        name: "Deactivate",
        route: "zones/deactivate",
        icon: "ban",
        status: "active"
      },
      {
        name: "Activate",
        route: "zones/activate",
        icon: "check circle outline",
        status: "inactive"
      }
    ]
  },{
    type: "countries",
    subContents:[
      {
        name: "Update",
        route: "countries/update",
        icon: "pencil alternate"
      },
      {
        name: "Deactivate",
        route: "countries/deactivate",
        icon: "ban",
        status: "active"
      },
      {
        name: "Activate",
        route: "countries/activate",
        icon: "check circle outline",
        status: "inactive"
      }
    ]
  },
  {
    type: "regions",
    subContents:[
      {
        name: "Update",
        route: "regions/update",
        icon: "pencil alternate"
      },
      {
        name: "Deactivate",
        route: "regions/deactivate",
        icon: "ban",
        status: "active"
      },
      {
        name: "Activate",
        route: "regions/activate",
        icon: "check circle outline",
        status: "inactive"
      }
    ]
  },
  {
    type: "provinces",
    subContents:[
      {
        name: "Update",
        route: "provinces/update",
        icon: "pencil alternate"
      },
      {
        name: "Deactivate",
        route: "provinces/deactivate",
        icon: "ban",
        status: "active"
      },
      {
        name: "Activate",
        route: "provinces/activate",
        icon: "check circle outline",
        status: "inactive"
      }
    ]
  },
  {
    type: "districts",
    subContents:[
      {
        name: "Update",
        route: "districts/update",
        icon: "pencil alternate"
      },
      {
        name: "Deactivate",
        route: "districts/deactivate",
        icon: "ban",
        status: "active"
      },
      {
        name: "Activate",
        route: "districts/activate",
        icon: "check circle outline",
        status: "inactive"
      }
    ]
  },
  {
    type: "sub-districts",
    subContents:[
      {
        name: "Update",
        route: "sub-districts/update",
        icon: "pencil alternate"
      },
      {
        name: "Deactivate",
        route: "sub-districts/deactivate",
        icon: "ban",
        status: "active"
      },
      {
        name: "Activate",
        route: "sub-districts/activate",
        icon: "check circle outline",
        status: "inactive"
      }
    ]
  },
  {
    type: "barangays",
    subContents:[
      {
        name: "Update",
        route: "barangays/update",
        icon: "pencil alternate"
      },
      {
        name: "Deactivate",
        route: "barangays/deactivate",
        icon: "ban",
        status: "active"
      },
      {
        name: "Activate",
        route: "barangays/activate",
        icon: "check circle outline",
        status: "inactive"
      }
    ]
  },
  {
    type: "couriers",
    subContents:[
      {
        name: "Update",
        route: "couriers/update",
        icon: "pencil alternate"
      },
      {
        name: "Unassign Courier",
        route: "couriers/unassign",
        icon: "male"
      },
      {
        name: "Reassign Vehicle",
        route: "couriers/reassign-vehicle",
        icon: "truck"
      },
      {
        name: "Reassign Zone",
        route: "couriers/reassign-zone",
        icon: "map marker"
      },
      {
        name: "Deactivate",
        route: "couriers/deactivate",
        icon: "ban",
        status: "active"
      }
    ]
  },
  {
    type: "customer-supports",
    subContents:[
      {
        name: "Update",
        route: "customer-supports/update",
        icon: "pencil alternate"
      },
      {
        name: "Deactivate",
        route: "customer-supports/deactivate",
        icon: "ban",
        status: "active"
      },
      {
        name: "Activate",
        route: "customer-supports/activate",
        icon: "check circle outline",
        status: "inactive"
      }
    ] 
  },
    {
      type: "dispatchers",
      subContents:[
        {
          name: "Update",
          route: "dispatchers/update",
          icon: "pencil alternate"
        },
        {
          name: "Deactivate",
          route: "dispatchers/deactivate",
          icon: "ban",
          status: "active"
        },
        {
          name: "Activate",
          route: "dispatchers/activate",
          icon: "check circle outline",
          status: "inactive"
      }
    ]
  },
  {
    type: "area-managers",
    subContents:[
      {
        name: "Update",
        route: "area-managers/update",
        icon: "pencil alternate"
      },
      {
        name: "Deactivate",
        route: "area-managers/deactivate",
        icon: "ban",
        status: "active"
      },
      {
        name: "Activate",
        route: "area-managers/activate",
        icon: "check circle outline",
        status: "inactive"
    }
    ]
  },
  {
    type: "bookings",
    subContents:[
      {
        name: "Update",
        route: "bookings/update",
        icon: "pencil alternate"
      },
      {
        name: "Cancel",
        route: "bookings/cancel",
        icon: "x"
      }
    ]
  }
];

exports.countryStates={
  name: "",
  code: ""
}

exports.countryFormItems=  [
  {
    name: "code",
    type: "text",
    label: "Code",
    placeholder: "Enter Country Code",
    isRequired: true,
    className: "",
    hasError: false
  },
  {
    name: "name",
    type: "text",
    label: "Name",
    placeholder: "Enter Country Name",
    isRequired: true,
    className: "",
    hasError: false
  }
]

exports.regionStates={
  name: "",
  code: "",
  country_id: ""
}

exports.regionFormItems=  [
  {
    name: "countries",
    state_name: "country_id",
    type: "select",
    label: "Country",
    placeholder: "Select a country",
    isRequired: true,
    className: "",
    hasError: false,
    option_type: "text",
    list: []
  },
  {
    name: "code",
    type: "text",
    label: "Code",
    placeholder: "Enter code",
    isRequired: true,
    className: "",
    hasError: false
  },
  {
    name: "name",
    type: "text",
    label: "Region",
    placeholder: "Enter region name",
    isRequired: true,
    className: "",
    hasError: false
  }
]

exports.provinceStates={
  name: "",
  code: "",
  region_id: ""
}

exports.provinceFormItems=  [
  {
    name: "regions",
    state_name: "region_id",
    type: "select",
    label: "Region",
    placeholder: "Select region",
    isRequired: true,
    className: "",
    hasError: false,
    option_type: "text",
    list: []
  },
  {
    name: "code",
    type: "text",
    label: "Code",
    placeholder: "Enter province code",
    isRequired: true,
    className: "",
    hasError: false
  },
  {
    name: "name",
    type: "text",
    label: "Province",
    placeholder: "Enter province name",
    isRequired: true,
    className: "",
    hasError: false
  }
  
]

exports.districtStates={
  name: "",
  code: "",
  province_id: ""
}

exports.districtFormItems=  [
  {
    name: "provinces",
    state_name: "province_id",
    type: "select",
    label: "Province",
    placeholder: "Select province",
    isRequired: true,
    className: "",
    hasError: false,
    option_type: "text",
    list: []
  },
  {
    name: "code",
    type: "text",
    label: "Code",
    placeholder: "Enter district code",
    isRequired: true,
    className: "",
    hasError: false
  },
  {
    name: "name",
    type: "text",
    label: "District",
    placeholder: "Enter district name",
    isRequired: true,
    className: "",
    hasError: false
  }
]

exports.subdistrictStates={
  name: "",
  code: "",
  district_id: ""
}

exports.subdistrictFormItems=  [
  {
    name: "districts",
    state_name: "district_id",
    type: "select",
    label: "District",
    placeholder: "Select districts",
    isRequired: true,
    className: "",
    hasError: false,
    option_type: "text",
    list: []
  },
  {
    name: "code",
    type: "text",
    label: "Code",
    placeholder: "Enter code",
    isRequired: true,
    className: "",
    hasError: false
  },
  {
    name: "name",
    type: "text",
    label: "Sub-district",
    placeholder: "Enter sub-district name",
    isRequired: true,
    className: "",
    hasError: false
  }
]

exports.barangayStates={
  name: "",
  code: "",
  district_id: "",
  sub_district_id: "",
}

exports.barangayFormItems=  [
  {
    name: "districts",
    state_name: "district_id",
    type: "select",
    label: "districts",
    placeholder: "Select districts",
    isRequired: true,
    className: "",
    hasError: false,
    option_type: "text",
    list: []
  },
  {
    name: "subdistricts",
    state_name: "sub_district_id",
    type: "select",
    label: "Sub-districts",
    placeholder: "Select sub-districts",
    isRequired: true,
    className: "",
    hasError: false,
    option_type: "text",
    list: []
  },
  {
    name: "code",
    type: "text",
    label: "Code",
    placeholder: "Enter code",
    isRequired: true,
    className: "",
    hasError: false
  },
  {
    name: "name",
    type: "text",
    label: "Barangay",
    placeholder: "Enter barangay name",
    isRequired: true,
    className: "",
    hasError: false
  }
]

exports.sampFormStates={
  account_num: 0,
  full_name: "",
  email: "",
  contact_num: "",
  redelivery: 0,
  address: ""
}

exports.sampFormItems=  [
  {
    name: "account_num",
    type: "number",
    label: "Account Number",
    placeholder: "Enter account number",
    isRequired: true,
    className: "",
    hasError: false
  },
  {
    name: "full_name",
    type: "text",
    label: "Name",
    placeholder: "Enter full name (First, Middle, Last)",
    isRequired: true,
    className: "",
    hasError: false
  },
  {
    name: "address",
    type: "text",
    label: "Address",
    placeholder: "Enter address",
    isRequired: true,
    className: "",
    hasError: false
  },
  {
    name: "contact_num",
    type: "text",
    label: "Contact Number",
    placeholder: "Enter contact number (+63) 921-123-4567",
    isRequired: true,
    className: "",
    hasError: false
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "Enter email address",
    isRequired: true,
    className: "",
    hasError: false
  },
  {
    name: "redelivery",
    type: "select",
    option_type: "number",
    label: "Redelivery Attempts",
    placeholder: "Select number of attempts",
    isRequired: true,
    className: "",
    hasError: false,
    list: [
      {
      key:1,
      text: "2",
      value: 2
      },
      {
      key:2,
      text: "3",
      value: 3
      },
      {
      key:3,
      text: "4",
      value: 4
      },
      {
      key:4,
      text: "5",
      value: 5
      }
  ]
  }
];
//START OF HUB CONSTANTS

exports.hubStates={
  code: "",
  name: "",
  address: "",
  country: "",
  region: "",
  province: "",
  district: "",
  sub_district: ""
}

exports.hubFormItems=  [
  {
    name: "code",
    type: "text",
    label: "Code",
    placeholder: "Enter code",
    isRequired: true,
    className: "",
    hasError: false
  },
  {
    name: "name",
    type: "text",
    label: "Name",
    placeholder: "Enter name",
    isRequired: true,
    className: "",
    hasError: false
  },
  {
    name: "address",
    type: "text",
    label: "Address",
    placeholder: "Enter address",
    isRequired: true,
    className: "",
    hasError: false
  },
  {
    name: "countries",
    state_name: "country",
    type: "select",
    label: "Country",
    placeholder: "Select countries",
    isRequired: true,
    className: "",
    hasError: false,
    option_type: "text",
    list: []
  },
  {
    name: "regions",
    state_name: "region",
    type: "select",
    label: "Region",
    placeholder: "Select region",
    isRequired: true,
    className: "",
    hasError: false,
    option_type: "text",
    list: []
  },
  {
    name: "provinces",
    state_name: "province",
    type: "select",
    label: "Province",
    placeholder: "Select province",
    isRequired: true,
    className: "",
    hasError: false,
    option_type: "text",
    list: []
  },
  {
    name: "districts",
    state_name: "district",
    type: "select",
    label: "District",
    placeholder: "Select district",
    isRequired: true,
    className: "",
    hasError: false,
    option_type: "text",
    list: []
  },
  {
    name: "subdistricts",
    state_name: "sub_district",
    type: "select",
    label: "Sub-districts",
    placeholder: "Select sub-districts",
    isRequired: true,
    className: "",
    hasError: false,
    option_type: "text",
    list: []
  }
]

exports.sampHubActContents=[
  {
    id: "1",
    code: "1001004",
    name: "ACOMMERCE",
    address: "LOS BANOS, LAGUNA",
    date_updated: "MAY 07, 2018",
    updated_by: "KIM CASIA"
    }
];

exports.sampHubDeactContents=[
    {
    id: "1",
    account_number: "1001023",
    company: "COMPANY A",
    address: "LOS BANOS, LAGUNA",
    date_updated: "MAY 08, 2018",
    updated_by: "KIM CASI0",
    reason: "Reasons"
    }
];


//END OF HUB CONSTANTS
//START OF CSR CONSTANTS
exports.customerSupportFormStates = {
  first_name: "",
  middle_name: "",
  last_name: "",
  contact_number: "",
  email: "",
  hub_id: "",
  distribution_center_id: "",
  password: "",
  user_id: ""
}

exports.customerSupportFormItems = [
  {
    name: "first_name",
    type: "text",
    label: "First Name",
    placeholder: "Enter first name",
    isRequired: true,
    className: "",
    hasError: false
  },
  {
    name: "middle_name",
    type: "text",
    label: "Middle Name",
    placeholder: "Enter middle name",
    isRequired: true,
    className: "",
    hasError: false
  },
  {
    name: "last_name",
    type: "text",
    label: "Last Name",
    placeholder: "Enter last name",
    isRequired: true,
    className: "",
    hasError: false
  },
  {
    name: "contact_number",
    type: "text",
    label: "Contact Number",
    placeholder: "Enter number (+639-XXXX-XXX)",
    isRequired: true,
    className: "",
    hasError: false
  },
  {
    name: "email",
    type: "text",
    label: "Email",
    placeholder: "Enter email",
    isRequired: true,
    className: "",
    hasError: false
  },
  {
    name: "password",
    type: "text",
    label: "Password",
    placeholder: "Enter password",
    isRequired: true,
    className: "",
    hasError: false
  },
  {
    name: "hubs",
    state_name: "hub_id",
    type: "select",
    label: "Hub",
    placeholder: "Select hub",
    isRequired: true,
    className: "",
    hasError: false,
    option_type: "text",
    list: []
  },
  {
    name: "distribution_centers",
    state_name: "distribution_center_id",
    type: "select",
    label: "Distribution Center",
    placeholder: "Select distribution center",
    isRequired: true,
    className: "",
    hasError: false,
    option_type: "text",
    list: []
  }

];


//END OF CSR CONSTANTS

//START OF ZONE CONSTANTS

exports.zoneStates = {
  dc: "",
  code: "",
  name: "",
  address: "",
  countries: "",
  region: "",
  province: "",
  districts: "",
  subdistricts: "",
  barangay: ""
};

exports.zoneFormItems = [
    {
      name: "dc",
      type: "select",
      label: "DC",
      placeholder: "Select DC",
      isRequired: true,
      className: "",
      hasError: false,
      option_type: "text",
      list: []
    },
    {
      name: "code",
      type: "text",
      label: "Code",
      placeholder: "Enter code",
      isRequired: true,
      className: "",
      hasError: false
    },
    {
      name: "name",
      type: "text",
      label: "Name",
      placeholder: "Enter zone name",
      isRequired: true,
      className: "",
      hasError: false
    },
    {
      name: "address",
      type: "text",
      label: "Address",
      placeholder: "Enter address",
      isRequired: true,
      className: "",
      hasError: false
    },
    {
      name: "countries",
      type: "select",
      label: "Country",
      placeholder: "Select countries",
      isRequired: true,
      className: "",
      hasError: false,
      option_type: "text",
      list: []
    },
    {
      name: "region",
      type: "select",
      label: "Region",
      placeholder: "Select region",
      isRequired: true,
      className: "",
      hasError: false,
      option_type: "text",
      list: []
    },
    {
      name: "province",
      type: "select",
      label: "Province",
      placeholder: "Select province",
      isRequired: true,
      className: "",
      hasError: false,
      option_type: "text",
      list: []
    },
    {
      name: "districts",
      type: "select",
      label: "District",
      placeholder: "Select districts",
      isRequired: true,
      className: "",
      hasError: false,
      option_type: "text",
      list: []
    },
    {
      name: "subdistricts",
      type: "select",
      label: "Sub-districts",
      placeholder: "Select sub-districts",
      isRequired: true,
      className: "",
      hasError: false,
      option_type: "text",
      list: []
    },
    {
      name: "barangay",
      type: "select",
      label: "Barangay",
      placeholder: "Select barangay",
      isRequired: true,
      className: "",
      hasError: false,
      option_type: "text",
      list: []
    }
];

exports.zone_list = [
  {
    id: 1,
    code: "MH1-PMP",
    barangay: "BATONG MALAKE",
    subdistricts: "LOS BANOS",
    districts: "1st",
    province: "LAGUNA",
    region: "IV-A",
    date_updated: "MAY 07, 2018",
    updated_by: "KIM CASIA"
  }
];

exports.deact_zone_list = [
  {
    id: 2,
    code: "MH1-PMP",
    barangay: "BATONG MALAKE",
    subdistricts: "LOS BANOS",
    districts: "1st",
    province: "LAGUNA",
    region: "IV-A",
    date_updated: "MAY 07, 2018",
    updated_by: "KIM CASIA",
    reason: "Duplicate"
  }
];

//END OF ZONE CONSTANTS
// START OF DC CONSTANTS
exports.dcFormStates={
  code: "",
  name: "",
  address: "",
  hub_id: "",
  country: "",
  region: "",
  district: "",
  sub_district: "",
  province: "",
  barangay: ""
}

exports.sampDCFormItems=  [
  {
    name: "hubs",
    state_name: "hub_id",
    type: "select",
    option_type: "text",
    label: "Hub",
    placeholder: "Select Hub",
    isRequired: true,
    className: "",
    hasError: false,
    list: []
  },
  {
    name: "countries",
    state_name: "country",
    type: "select",
    option_type: "text",
    label: "Country",
    placeholder: "Select countries",
    isRequired: true,
    className: "",
    hasError: false,
    list: []
  },

  {
    name: "regions",
    state_name: "region",
    type: "select",
    option_type: "text",
    label: "Region",
    placeholder: "Select region",
    isRequired: true,
    className: "",
    hasError: false,
    list: []
  },
  {
    name: "provinces",
    state_name: "province",
    type: "select",
    option_type: "text",
    label: "Province",
    placeholder: "Select province",
    isRequired: true,
    className: "",
    hasError: false,
    list: []
  },
  {
    name: "districts",
    state_name: "district",
    type: "select",
    option_type: "text",
    label: "district",
    placeholder: "Select districts",
    isRequired: true,
    className: "",
    hasError: false,
    list: []
  },
  {
    name: "subdistricts",
    state_name: "sub_district",
    type: "select",
    option_type: "text",
    label: "Sub-district",
    placeholder: "Select sub-districts",
    isRequired: true,
    className: "",
    hasError: false,
    list: []
  },
  {
    name: "barangays",
    state_name: "barangay",
    type: "select",
    option_type: "text",
    label: "Barangay",
    placeholder: "Select barangay",
    isRequired: true,
    className: "",
    hasError: false,
    list: []
  },
  {
    name: "address",
    type: "text",
    label: "Address",
    placeholder: "Enter address",
    isRequired: true,
    className: "",
    hasError: false
  },
  {
    name: "code",
    type: "text",
    label: "Code",
    placeholder: "Enter code",
    isRequired: true,
    className: "",
    hasError: false
  },
  {
    name: "name",
    type: "text",
    label: "Name",
    placeholder: "Enter name",
    isRequired: true,
    className: "",
    hasError: false
  }
];

exports.dcSampActContents=[
  {
    id: "1",
    code: "ABC1",
    name: "CEBU DC",
    address: "CEBU CITY",
    assoc_to_hub: "HUB A",
    countries: "PHILIPPINES",
    region: "REGION VII",
    province: "CEBU",
    districts: "SIBONGA",
    sub_districts: "districts A",
    barangay: "BARANGAY A",
    date_updated: "MAY 28, 2018",
    updated_by: "KIM CASIO"
    },
  {
    id: "2",
    code: "ABC2",
    name: "CEBU DC",
    address: "CEBU CITY",
    assoc_to_hub: "HUB B",
    countries: "PHILIPPINES",
    region: "REGION VII",
    province: "CEBU",
    districts: "SIBONGA",
    sub_districts: "districts A",
    barangay: "BARANGAY B",
    date_updated: "MAY 28, 2018",
    updated_by: "KIM CASIO"
    }
 
];
exports.dcSampDeactContents=[
  {
    id: "1",
    code: "ABC3",
    name: "CEBU DC",
    address: "CEBU CITY",
    assoc_to_hub: "HUB A",
    countries: "PHILIPPINES",
    region: "REGION VII",
    province: "CEBU",
    districts: "SIBONGA",
    sub_districts: "districts A",
    barangay: "BARANGAY A",
    date_updated: "MAY 28, 2018",
    updated_by: "KIM CASIO",
    reason: "unknown"
    },
  {
    id: "2",
    code: "ABC4",
    name: "CEBU DC",
    address: "CEBU CITY",
    assoc_to_hub: "HUB B",
    countries: "PHILIPPINES",
    region: "REGION VII",
    province: "CEBU",
    districts: "SIBONGA",
    sub_districts: "districts A",
    barangay: "BARANGAY B",
    date_updated: "MAY 28, 2018",
    updated_by: "KIM CASIO",
    reason: "too far"
    }
 
];
///END OF DC CONSTANTS

//CONSTANTS FOR GENERAL DETAILS
exports.detailsTable=[{
  type: "account",
  title: "ACCOUNT DETAILS",
  header: ["ACCOUNT NUMBER", "COMPANY", "DELIVERY POSITIONING TIME", "PICKUP POSITIONING TIME", "DATE UPDATED"]
},
{
  type: "hub",
  title: "HUB DETAILS",
  header: ["CODE", "NAME", "ADDRESS", "DATE UPDATED"]
},
{
  type: "dc",
  title: "DC DETAILS",
  header: ["CODE", "NAME", "ADDRESS", "ASSOC. TO HUB", "COUNTRY","REGION", "PROVINCE", "districts", "SUBdistricts", "BARANGAY"]
},
{
  type: "zone",
  title: "ZONE DETAILS",
  header: ["CODE", "BARANGAY", "MUNICIPALITY/CITY", "PROVINCE", "REGION"]
},
{
  type: "vehicle",
  title: "VEHICLE DETAILS",
  header: ["PLATE NUMBER", "MODEL", "WEIGHT(KG)", "ASSIGNED COURIER", "DATE UPDATED"]
},
{
  type: "region",
  title: "REGION DETAILS",
  header: ["REGION", "PROVINCES", "CITIES", "MUNICIPALITIES", "BARANGAYS"]
},
{
  type: "province",
  title: "PROVINCE DETAILS",
  header: ["PROVINCE", "REGION", "CITIES", "MUNICIPALITIES", "BARANGAYS"]
},
{
  type: "city",
  title: "CITY DETAILS",
  header: ["CITY", "REGION", "PROVINCE","BARANGAYS"]
},
{
  type: "municipality",
  title: "MUNICIPALITY DETAILS",
  header: ["MUNICIPALITY","REGION", "PROVINCE","BARANGAYS"]
},
{
  type: "barangay",
  title: "BARANGAY DETAILS",
  header: ["BARANGAY","REGION", "PROVINCE","MUNICIPALITY"]
}
];

exports.sampForGeneralDetails={
    id: "1",
    code: "ABC3",
    name: "CEBU DC",
    address: "CEBU CITY",
    assoc_to_hub: "HUB MARC EPAL",
    countries: "PHILIPPINES",
    region: "REGION VII",
    province: "CEBU",
    districts: "SIBONGA",
    sub_districts: "districts A",
    barangay: "BARANGAY A"
    };

//END OF CONSTANTS FOR GENERAL DETAILS

//START OF CONSTANTS FOR COURIER
exports.courierFormStates={
  first_name: "",
  middle_name: "",
  last_name: "",
  phone: "",
  email: "",
  status: "",
  zone: "",
  distribution_center:"",
  vehicle: "",
  username: "",
  password: ""
  //TO REVISE
}

exports.courierFormItems=  [
  {
    name: "first_name",
    type: "text",
    label: "First Name",
    placeholder: "Enter first name",
    isRequired: true,
    className: "",
    hasError: false
  },
  {
    name: "middle_name",
    type: "text",
    label: "Middle Name",
    placeholder: "Enter middle name",
    isRequired: true,
    className: "",
    hasError: false
  },
  {
    name: "last_name",
    type: "text",
    label: "Last Name",
    placeholder: "Enter last name",
    isRequired: true,
    className: "",
    hasError: false
  },
  {
    name: "phone",
    type: "text",
    label: "Phone Number",
    placeholder: "Enter number (+639-XXXX-XXX)",
    isRequired: true,
    className: "",
    hasError: false
  },
  {
    name: "email",
    type: "text",
    label: "Email",
    placeholder: "Enter email",
    isRequired: true,
    className: "",
    hasError: false
  },
  {
    name: "status",
    type: "select",
    option_type: "text",
    label: "Status",
    placeholder: "Select status",
    isRequired: true,
    className: "",
    hasError: false,
    list: [
      {
        text: 'Active',
        value: 'Active'  
      },
      {
        text: 'Not active',
        value: 'Not active'
      }
    ]
  },
  {
    name: "zone",
    type: "select",
    option_type: "text",
    label: "Zone",
    placeholder: "Select Zone",
    isRequired: true,
    className: "",
    hasError: false,
    list: [
      {
        id: '1',
        text: 'Zone 1',
        value: 'Zone 1'  
      },
      {
        id: '2',
        text: 'Zone 2',
        value: 'Zone 2'  
      },
      {
        id: '3',
        text: 'Zone 3',
        value: 'Zone 3'  
      },
      {
        id: '4',
        text: 'Zone 4',
        value: 'Zone 4'  
      },
      {
        id: '5',
        text: 'Zone 5',
        value: 'Zone 5'  
      }
      
    ]
  },
  {
    name: "assigned_vehicle",
    type: "select",
    option_type: "text",
    label: "Assigned Vehicle",
    placeholder: "Select vehicle",
    isRequired: true,
    className: "",
    hasError: false,
    list: []
  }
];
exports.courierSampActContents=[
  {
    id: "1",
    name: "ALVAREZ, JULIUS",
    contact_num: "+639079970216",
    zone: "MH1-PMP",
    assigned_vehicle: "9953 PL",
    date_updated: "May 23, 2018",
    updated_by: "ANTHONY BALDE"
    },
  {
    id: "2",
    name: "BACCAY, JOSE	",
    contact_num: "+639055241815",
    zone: "MH4-MLA",
    assigned_vehicle: "1326",
    date_updated: "May 17, 2018",
    updated_by: "ANTHONY BALDE"
    }
 
];
exports.courierSampDeactContents=[
  {
    id: "1",
    name: "ALVAREZ, JULIUS",
    contact_num: "+639079970216",
    zone: "MH1-PMP",
    assigned_vehicle: "9953 PL",
    date_updated: "May 23, 2018",
    updated_by: "ANTHONY BALDE",
    reason: "resigned"
    },
  {
    id: "2",
    name: "BACCAY, JOSE	",
    contact_num: "+639055241815",
    zone: "MH4-MLA",
    assigned_vehicle: "1326",
    date_updated: "May 17, 2018",
    updated_by: "ANTHONY BALDE",
    reason: "sick"
    }
 
];
exports.courierSiteOptions = [
 {
   text: 'ALL',
  value: 'ALL'  },
  {
    text: 'Site A',
   value: 'Site A'  },
   {
    text: 'Site B',
   value: 'Site B'  },
   {
    text: 'Site C',
   value: 'Site C'  },
 ]
 exports.courierZoneOptions = [
  {
    text: 'ALL',
   value: 'ALL'  },
   {
     text: 'Zone A',
    value: 'Zone A'  },
    {
     text: 'Zone B',
    value: 'Zone B'  },
    {
     text: 'Zone C',
    value: 'Zone C'  },
  ]
 
//END OF CONSTANTS FOR COURIER
exports.sampActVehicles=[
  {
    id: "1",
    plate_number: "JNK-5415",
    type: "Motorcycle",
    model: "-",
    update_date: "April 04, 2018", 
    updated_by: "Marc Saulo"
    },
    {
    id: "2",
    plate_number: "JNK-306",
    type: "Truck",
    model: "-",
    update_date: "February 02, 2018", 
    updated_by: "Marc Saulo"
    }
 
];

exports.sampDeactVehicles=[
  {
    id: "1",
    plate_number: "TEB-737",
    type: "Truck",
    model: "-",
    reason: "ON REPAIR"
    },
    {
    id: "2",
    plate_number: "WYS-890",
    type: "Motorcycle",
    model: "-",
    reason: "ON REPAIR"
    }
 
];

exports.sampFormStatesVehicle={
  plate_number: "",
  type: "",
  model: ""
}

exports.sampFormItemsVehicle=  [
  {
    name: "plate_number",
    type: "text",
    label: "Plate Number",
    placeholder: "XXX-XXXX",
    isRequired: true,
    className: "",
    hasError: false
  },
  {
    name: "type",
    type: "text",
    label: "Type",
    placeholder: "Motorcycle/Truck",
    isRequired: true,
    className: "",
    hasError: false
  },
  {
    name: "model",
    type: "text",
    label: "Model",
    placeholder: "Vehicle Model",
    isRequired: true,
    className: "",
    hasError: false
  }
];

exports.confirmationDeactivateForm=  [
  {
    name: "reason",
    state_name: "reason",
    type: "select",
    label: "Reason",
    placeholder: "Reason",
    isRequired: true,
    className: "",
    hasError: false,
    option_type: "text",
    list: [{
      key:1,
      text: "RESIGNED",
      value: 2
      },
      {
      key:2,
      text: "SICK",
      value: 3
      },
      {
      key:3,
      text: "ON LEAVE",
      value: 4
      }]
}]

exports.confirmationDeactivateStates={
  reason: ""
}

exports.confirmationReassignCourForm=  [
  {
    name: "reassign_courier",
    type: "select",
    label: "Reassign Courier",
    placeholder: "Choose courier",
    isRequired: true,
    className: "",
    hasError: false,
    option_type: "text",
    list: [{
      key:1,
      text: "Steve Rogers",
      value: 2
      },
      {
      key:2,
      text: "Tony Stark",
      value: 3
      },
      {
      key:3,
      text: "Bruce Banner",
      value: 4
      },
      {
      key:4,
      text: "Stephen Strange",
      value: 5
      }]
  }
]
exports.confirmationReassignVehicleForm=  [
  {
    name: "reassign_vehicle",
    type: "select",
    label: "Reassign Vehicle",
    placeholder: "Choose vehicle",
    isRequired: true,
    className: "",
    hasError: false,
    option_type: "text",
    list: [{
      key:1,
      text: "Vehicle 1",
      value: 2
      },
      {
      key:2,
      text: "Vehicle 2",
      value: 3
      },
      {
      key:3,
      text: "Vehicle 3",
      value: 4
      },
      {
      key:4,
      text: "Vehicle 4",
      value: 5
      }]
  }
]
exports.confirmationReassignZoneForm=  [
  {
    name: "reassign_zone",
    type: "select",
    label: "Reassign Zone",
    placeholder: "Choose zone",
    isRequired: true,
    className: "",
    hasError: false,
    option_type: "text",
    list: [{
      key:1,
      text: "Zone 1",
      value: 2
      },
      {
      key:2,
      text: "Zone 2",
      value: 3
      },
      {
      key:3,
      text: "Zone 3",
      value: 4
      },
      {
      key:4,
      text: "Zone 4",
      value: 5
      }]
  }
]


exports.confirmationReassignCourStates={
  reassign_courier: ""
}

exports.dispatcherFormStates={
  first_name: "",
  middle_name: "",
  last_name: "",
  contact_number: "",
  email: "",
  hub_id: "",
  distribution_center_id: "",
  password: "",
  user_id: 0

}

exports.dispatcherFormItems=  [
  {
    name: "first_name",
    type: "text",
    label: "First Name",
    placeholder: "Enter first name",
    isRequired: true,
    className: "",
    hasError: false
  },
  {
    name: "middle_name",
    type: "text",
    label: "Middle Name",
    placeholder: "Enter middle name",
    isRequired: true,
    className: "",
    hasError: false
  },
  {
    name: "last_name",
    type: "text",
    label: "Last Name",
    placeholder: "Enter last name",
    isRequired: true,
    className: "",
    hasError: false
  },
  {
    name: "contact_number",
    type: "text",
    label: "Contact Number",
    placeholder: "Enter number (+639-XXXX-XXX)",
    isRequired: true,
    className: "",
    hasError: false
  },
  {
    name: "email",
    type: "text",
    label: "Email",
    placeholder: "Enter email",
    isRequired: true,
    className: "",
    hasError: false
  },
  {
    name: "password",
    type: "text",
    label: "password",
    placeholder: "Enter password",
    isRequired: true,
    className: "",
    hasError: false
  },
  {
    name: "hubs",
    state_name: "hub_id",
    type: "select",
    label: "Hub",
    placeholder: "Select hub",
    isRequired: true,
    className: "",
    hasError: false,
    option_type: "text",
    list: []
  },
  {
    name: "distribution_centers",
    state_name: "distribution_center_id",
    type: "select",
    label: "Distribution Center",
    placeholder: "Select distribution center",
    isRequired: true,
    className: "",
    hasError: false,
    option_type: "text",
    list: []
  }
];

exports.areaManagerFormStates={
  first_name: "",
  middle_name: "",
  last_name: "",
  contact_number: "",
  email: "",
  hub_id: "",
  distribution_center_id: "",
  password: "",
  user_id: ""
}

exports.areaManagerFormItems=  [
  {
    name: "first_name",
    type: "text",
    label: "First Name",
    placeholder: "Enter first name",
    isRequired: true,
    className: "",
    hasError: false
  },
  {
    name: "middle_name",
    type: "text",
    label: "Middle Name",
    placeholder: "Enter middle name",
    isRequired: true,
    className: "",
    hasError: false
  },
  {
    name: "last_name",
    type: "text",
    label: "Last Name",
    placeholder: "Enter last name",
    isRequired: true,
    className: "",
    hasError: false
  },
  {
    name: "contact_number",
    type: "text",
    label: "Contact Number",
    placeholder: "Enter number (+639-XXXX-XXX)",
    isRequired: true,
    className: "",
    hasError: false
  },
  {
    name: "email",
    type: "text",
    label: "Email",
    placeholder: "Enter email",
    isRequired: true,
    className: "",
    hasError: false
  },
  {
    name: "password",
    type: "text",
    label: "password",
    placeholder: "Enter password",
    isRequired: true,
    className: "",
    hasError: false
  },
  {
    name: "hubs",
    state_name: "hub_id",
    type: "select",
    label: "Hub",
    placeholder: "Select hub",
    isRequired: true,
    className: "",
    hasError: false,
    option_type: "text",
    list: []
  },
  {
    name: "distribution_centers",
    state_name: "distribution_center_id",
    type: "select",
    label: "Distribution Center",
    placeholder: "Select distribution center",
    isRequired: true,
    className: "",
    hasError: false,
    option_type: "text",
    list: []
  },
];

exports.ZoneDeacReasons = [{
    name: "reason",
    state_name: "reason",
    type: "select",
    label: "Reason",
    placeholder: "Reason",
    isRequired: true,
    className: "",
    hasError: false,
    option_type: "text",
    list: [{
      key:1,
      text: "CRITICAL AREA",
      value: 2
      },
      {
      key:2,
      text: "INACCESSIBLE",
      value: 3
      },
      {
      key:3,
      text: "NON-EXISTENT",
      value: 4
      }]
}]

exports.LocationDeacReasons = [{
    name: "reason",
    state_name: "reason",
    type: "select",
    label: "Reason",
    placeholder: "Reason",
    isRequired: true,
    className: "",
    hasError: false,
    option_type: "text",
    list: [{
      key:1,
      text: "STATE OF CALAMITY",
      value: 2
      },
      {
      key:2,
      text: "DUPLICATE",
      value: 3
      },
      {
      key:3,
      text: "NON-EXISTENT",
      value: 4
      }]
}]

exports.SiteDeacReasons = [{
    name: "reason",
    state_name: "reason",
    type: "select",
    label: "Reason",
    placeholder: "Reason",
    isRequired: true,
    className: "",
    hasError: false,
    option_type: "text",
    list: [{
      key:1,
      text: "UNDER CONSTRUCTION",
      value: 2
      },
      {
      key:2,
      text: "CLOSED",
      value: 3
      },
      {
      key:3,
      text: "OUT OF SERVICE",
      value: 4
      }]
}]

exports.AccountDeacReasons = [{
    name: "reason",
    state_name: "reason",
    type: "select",
    label: "Reason",
    placeholder: "Reason",
    isRequired: true,
    className: "",
    hasError: false,
    option_type: "text",
    list: [{
      key:1,
      text: "TERMINATED",
      value: 2
      },
      {
      key:2,
      text: "FRAUD",
      value: 3
      },
      {
      key:3,
      text: "DUPLICATE",
      value: 4
      }]
}]

exports.reasonState = {
  reason: ""
}

exports.bookingStates = {
  shipper_name: "",
  pick_up_address: "",
  contact_number: "",
  email: "",
  product_type: "",
  cargo_type: "",
  mode_of_payment: "",
  client_account_number: ""
}

exports.bookingFormItems = [
  {
    name: "shipper_name",
    type: "text",
    label: "Shipper Name",
    placeholder: "Enter shipper name",
    isRequired: false,
    className: "",
    hasError: false
  },
  {
    name: "pick_up_address",
    type: "text",
    label: "Pickup Address",
    placeholder: "Enter pickup address",
    isRequired: true,
    className: "",
    hasError: false
  },
  {
    name: "contact_number",
    type: "text",
    label: "Contact Number",
    placeholder: "Enter contact number (+63) 921-123-4567",
    isRequired: true,
    className: "",
    hasError: false
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "Enter email address",
    isRequired: true,
    className: "",
    hasError: false
  },
  {
    name: "product_type",
    type: "text",
    label: "Product Type",
    placeholder: "Enter product type",
    isRequired: false,
    className: "",
    hasError: false,
  },
  {
    name: "cargo_type",
    type: "text",
    label: "Cargo Type",
    placeholder: "Enter cargo type",
    isRequired: false,
    className: "",
    hasError: false,
  },
  {
    name: "mode_of_payment",
    type: "text",
    label: "Mode of Payment",
    placeholder: "Enter mode of payment",
    isRequired: true,
    className: "",
    hasError: false
  },
  {
    name: "clients",
    state_name: "client_account_number",
    type: "select",
    label: "Client",
    placeholder: "Select client",
    isRequired: true,
    className: "",
    hasError: false,
    option_type: "text",
    list: []
  }
];

exports.bookingCancelReasons = [
  {
    name: "reason",
    state_name: "reason",
    type: "select",
    label: "Reason",
    placeholder: "Reason",
    isRequired: true,
    className: "",
    hasError: false,
    option_type: "text",
    list: [{
      key:1,
      text: "INVALID",
      value: 2
      },
      {
      key:2,
      text: "DUPLICATE",
      value: 3
      },
      {
      key:3,
      text: "NON-EXISTENT",
      value: 4
      }]
  }
];

exports.pricingFormStates={
  package_type: "",
  origin: "",
  destination: "",
  price: "",
  clients: "",
  client_account_number: ""
}

exports.pricingFormItems=  [
  {
    name: "clients",
    state_name: "client_account_number",
    type: "select",
    label: "Client",
    placeholder: "Select client",
    isRequired: true,
    className: "",
    hasError: false,
    option_type: "text",
    list: []
  },
  {
    name: "origins",
    state_name: "origin",
    type: "select",
    option_type: "text",
    label: "Origin",
    placeholder: "Select Origin",
    isRequired: true,
    className: "",
    hasError: false,
    list: [{
      key:1,
      text: "Origin 1",
      value: "Origin 1"
      },
      {
      key:2,
      text: "Origin 2",
      value: "Origin 2"
      },
      {
      key:3,
      text: "Origin 3",
      value: "Origin 3"
      },
      {
      key:4,
      text: "Origin 4",
      value: "Origin 4"
      },
      {
      key:5,
      text: "Origin 5",
      value: "Origin 5"
      },
    ]
  },
  {
    name: "destinations",
    state_name: "destination",
    type: "select",
    option_type: "text",
    label: "Destination",
    placeholder: "Select Destination",
    isRequired: true,
    className: "",
    hasError: false,
    list: [{
      key:1,
      text: "Destination 1",
      value: "Destination 1"
      },
      {
      id:2,
      text: "Destination 2",
      value: "Destination 2"
      },
      {
      id:3,
      text: "Destination 3",
      value: "Destination 3"
      },
      {
      id:4,
      text: "Destination 4",
      value: "Destination 4"
      },
      {
      id:5,
      text: "Destination 5",
      value: "Destination 5"
      },]
  },
  {
    name: "price",
    type: "text",
    label: "Price",
    placeholder: "Enter price",
    isRequired: true,
    className: "",
    hasError: false
  },
  {
    name: "package_type",
    type: "text",
    label: "Package Type",
    placeholder: "Enter package name",
    isRequired: true,
    className: "",
    hasError: false
  }
];

exports.userUpdateFormItems = [
  {
    name: "hubs",
    state_name: "hub_id",
    type: "select",
    label: "Hub",
    placeholder: "Select hub",
    isRequired: true,
    className: "",
    hasError: false,
    option_type: "text",
    list: []
  },
  {
    name: "distribution_centers",
    state_name: "distribution_center_id",
    type: "select",
    label: "Distribution Center",
    placeholder: "Select distribution center",
    isRequired: true,
    className: "",
    hasError: false,
    option_type: "text",
    list: []
  }
]
