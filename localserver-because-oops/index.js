const express = require('express');
const cors    = require('cors');
const app     = express();

app.use(cors());

app.all('/server/properties', (req, res) => {
    const name     = 'Property Name'
    const address1 = '123 Address St.'
    const address2 = 'City, CA 90210'
    return res.send([
                        {
                            "id":         1,
                            "name":       name,
                            "address1":   address1,
                            "address2":   address2,
                            "sqft":       Math.random() * 1200,
                            "isOccupied": true,
                            "baseRent":   "$123,000.00"
                        },
                        {
                            "id":         2,
                            "name":       name,
                            "address1":   address1,
                            "address2":   address2,
                            "sqft":       Math.random() * 1500,
                            "isOccupied": false,
                            "baseRent":   "$12,345.67"
                        },
                        {
                            "id":         3,
                            "name":       name,
                            "address1":   address1,
                            "address2":   address2,
                            "sqft":       Math.random() * 900,
                            "isOccupied": true,
                            "baseRent":   "$1,020.99"
                        }
                    ])
});
app.all('/server/property-leases', (req, res) => {
    let phone       = "555-555-555";
    let name        = "Firstname Lastname";
    let email       = "name@email.com";
    let companyName = 'Company Name'
    return res.send({
                        1: [{
                            "id":               Math.random() + '',
                            "status":           "EXPIRED",
                            "companyName":      companyName,
                            "startDate":        "2012-04-01",
                            "inclusiveEndDate": "2018-04-30",
                            "contacts":         {
                                [name]: {
                                    "id":   Math.random() + '',
                                    phone, email,
                                    "tags": ["PRIMARY", "TENANT"]
                                }
                            }
                        }, {
                            "id":               Math.random() + '',
                            "status":           "EXPIRED",
                            "companyName":      companyName,
                            "startDate":        "2018-06-01",
                            "inclusiveEndDate": "2020-05-31",
                            "contacts":         {
                                [name]: {
                                    "id":   Math.random() + '',
                                    phone, email,
                                    "tags": ["PRIMARY", "TENANT"]
                                },
                                [name]: {
                                    "id":   Math.random() + '',
                                    phone, email,
                                    "tags": ["TENANT, EMERGENCY"]
                                }
                            }
                        }, {
                            "id":               Math.random() + '',
                            "status":           "ACTIVE",
                            "companyName":      companyName,
                            "startDate":        "2020-08-01",
                            "inclusiveEndDate": "2028-07-31",
                            "contacts":         {
                                [name]: {
                                    "id":   Math.random() + '',
                                    phone, email,
                                    "tags": ["TENANT"]
                                },
                                [name]: {
                                    "id":   Math.random() + '',
                                    phone, email,
                                    "tags": ["TENANT"]
                                },
                                [name]: {
                                    "id":   Math.random() + '',
                                    phone, email,
                                    "tags": ["TENANT"]
                                },
                                [name]: {
                                    "id":   Math.random() + '',
                                    phone, email,
                                    "tags": ["TENANT"]
                                }
                            }
                        }, {
                            "id":               "727c976d",
                            "status":           "UPCOMING",
                            "companyName":      companyName,
                            "startDate":        "2022-01-01",
                            "inclusiveEndDate": "2026-12-31",
                            "contacts":         {
                                [name]: {
                                    "id":   Math.random() + '',
                                    phone, email,
                                    "tags": ["TENANT"]
                                },
                                [name]: {
                                    "id":   Math.random() + '',
                                    phone, email,
                                    "tags": ["PRIMARY", "TENANT"]
                                }
                            }
                        }],
                        2: [],
                        3: [{
                            "id":               "6f24746f",
                            "status":           "EXPIRED",
                            "companyName":      companyName,
                            "startDate":        "2018-10-01",
                            "inclusiveEndDate": "2021-03-31",
                            "contacts":         {
                                [name]: {
                                    "id":   Math.random() + '',
                                    phone, email,
                                    "tags": ["PRIMARY", "TENANT"]
                                }
                            }
                        }, {
                            "id":               "ff358dec",
                            "status":           "ACTIVE",
                            "companyName":      companyName,
                            "startDate":        "2021-05-01",
                            "inclusiveEndDate": "2024-04-30",
                            "contacts":         {
                                [name]: {
                                    "id":   Math.random() + '',
                                    phone, email,
                                    "tags": ["PRIMARY", "TENANT"]
                                },
                                [name]: {
                                    "id":   Math.random() + '',
                                    phone, email,
                                    "tags": ["TENANT"]
                                },
                                [name]: {
                                    "id":   Math.random() + '',
                                    phone, email,
                                    "tags": ["EMERGENCY"]
                                }
                            }
                        }]
                    }[+req.query.property])
});
app.listen(4090);