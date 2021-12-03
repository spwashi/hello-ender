const express = require('express');
const cors    = require('cors');
const app     = express();

app.use(cors());

app.post('/properties', (req, res) => {
    return res.send([
                        {
                            "id":         1,
                            "name":       "Star Tower",
                            "address1":   "110 S. Solar Blvd.",
                            "address2":   "Austin, TX 78746",
                            "sqft":       12500,
                            "isOccupied": true,
                            "baseRent":   "$23,000.00"
                        },
                        {
                            "id":         2,
                            "name":       "The Brand New Corner Gables",
                            "address1":   "123 Road Runner Ave.",
                            "address2":   "Austin, TX 78704",
                            "sqft":       9000,
                            "isOccupied": false,
                            "baseRent":   "$17,050.00"
                        },
                        {
                            "id":         3,
                            "name":       "Mazer Mall 3",
                            "address1":   "9848 Bluebonnet St.",
                            "address2":   "Austin, TX 78709",
                            "sqft":       7500,
                            "isOccupied": true,
                            "baseRent":   "$14,020.00"
                        }
                    ])
});
app.post('/property-leases', (req, res) => {
    return res.send({
                        1: [{
                            "id":               "74fb4c4f",
                            "status":           "EXPIRED",
                            "companyName":      "Cat Posters R' Us",
                            "startDate":        "2012-04-01",
                            "inclusiveEndDate": "2018-04-30",
                            "contacts":         {
                                "Hrafn Miomir": {
                                    "id":    "bcb83cfc",
                                    "phone": "555-060-3403",
                                    "email": "hrafn@cprus.com",
                                    "tags":  ["PRIMARY", "TENANT"]
                                }
                            }
                        }, {
                            "id":               "83e1688c",
                            "status":           "EXPIRED",
                            "companyName":      "Mars Travel Agency",
                            "startDate":        "2018-06-01",
                            "inclusiveEndDate": "2020-05-31",
                            "contacts":         {
                                "Kimberly Garland": {
                                    "id":    "610b27eb",
                                    "phone": "555-012-0457",
                                    "email": "kgarland@marsta.com",
                                    "tags":  ["PRIMARY", "TENANT"]
                                },
                                "Roman Matías":     {
                                    "id":    "46add1ec",
                                    "phone": "555-045-7021",
                                    "email": "rmatias@marsta.com",
                                    "tags":  ["TENANT, EMERGENCY"]
                                }
                            }
                        }, {
                            "id":               "6b5926d4",
                            "status":           "ACTIVE",
                            "companyName":      "Juice for Days",
                            "startDate":        "2020-08-01",
                            "inclusiveEndDate": "2028-07-31",
                            "contacts":         {
                                "Gisila Virva":      {
                                    "id":    "945638c2",
                                    "phone": "555-046-2998",
                                    "email": "gvirva@j4days.com",
                                    "tags":  ["TENANT"]
                                },
                                "Masoomeh Narcissa": {
                                    "id":    "592def02",
                                    "phone": "555-039-1312",
                                    "email": "mnarcissa@j4days.com",
                                    "tags":  ["TENANT"]
                                },
                                "Enora Jonas":       {
                                    "id":    "5947fde7",
                                    "phone": "555-053-6923",
                                    "email": "ejonas@j4days.com",
                                    "tags":  ["TENANT"]
                                },
                                "Rebeca Theodotos":  {
                                    "id":    "6cec5a40",
                                    "phone": "555-092-0549",
                                    "email": "rtheodotos@j4days.com",
                                    "tags":  ["TENANT"]
                                }
                            }
                        }, {
                            "id":               "727c976d",
                            "status":           "UPCOMING",
                            "companyName":      "Space Falcon",
                            "startDate":        "2022-01-01",
                            "inclusiveEndDate": "2026-12-31",
                            "contacts":         {
                                "Dorotea Idunn":   {
                                    "id":    "12b59dc7",
                                    "phone": "555-854-0507",
                                    "email": "didunn@spacefalcon.com",
                                    "tags":  ["TENANT"]
                                },
                                "Melisende Irena": {
                                    "id":    "673fb2c3",
                                    "phone": "555-034-1345",
                                    "email": "mirena@spacefalcon.com",
                                    "tags":  ["PRIMARY", "TENANT"]
                                }
                            }
                        }],
                        2: [],
                        3: [{
                            "id":               "6f24746f",
                            "status":           "EXPIRED",
                            "companyName":      "Make It So",
                            "startDate":        "2018-10-01",
                            "inclusiveEndDate": "2021-03-31",
                            "contacts":         {
                                "Elwin Johannes": {
                                    "id":    "9d1e5f47",
                                    "phone": "555-604-2394",
                                    "email": "eljo@makeitso.com",
                                    "tags":  ["PRIMARY", "TENANT"]
                                }
                            }
                        }, {
                            "id":               "ff358dec",
                            "status":           "ACTIVE",
                            "companyName":      "Galactic Games Inc.",
                            "startDate":        "2021-05-01",
                            "inclusiveEndDate": "2024-04-30",
                            "contacts":         {
                                "Madelon Joel":     {
                                    "id":    "52650d47",
                                    "phone": "555-123-4567",
                                    "email": "mjoel@galacticgames.com",
                                    "tags":  ["PRIMARY", "TENANT"]
                                },
                                "Anis Sheard":      {
                                    "id":    "42700d34",
                                    "phone": "555-345-7621",
                                    "email": "asheard@galacticgames.com",
                                    "tags":  ["TENANT"]
                                },
                                "Laurinda Stefana": {
                                    "id":    "f1b5a7d4",
                                    "phone": "555-671-2543",
                                    "email": "lstefana@galacticgames.com",
                                    "tags":  ["EMERGENCY"]
                                }
                            }
                        }]
                    }[+req.query.property])
});
app.listen(4090);