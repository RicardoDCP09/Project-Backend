export const dataBase = [{
    "status_member": [
        {
            "id": "1",
            "status": "active"
        },
        {
            "id": "2",
            "status": "inactive"
        },
        {
            "id": "3",
            "status": "expire"
        }
    ],
    "status_class": [
        {
            "id": "1",
            "status": "Available"
        },
        {
            "id": "2",
            "status": "Full"
        },
        {
            "id": "3",
            "status": "Canceled"
        }
    ],
    "status_reservation": [
        {
            "id": "1",
            "status": "canceled"
        },
        {
            "id": "2",
            "status": "confirmed"
        },
        {
            "id": "3",
            "status": "outstanding"
        }
    ],
    "status_payment": [
        {
            "id": "1",
            "status": "confirmed"
        },
        {
            "id": "2",
            "status": "waiting"
        },
        {
            "id": "3",
            "status": "canceled"
        }
    ],
    "pay_methods": [
        {
            "id": "1",
            "status": "Cash"
        },
        {
            "id": "2",
            "status": "Card"
        },
        {
            "id": "3",
            "status": "Transfer"
        }
    ],
    "status_inventory": [
        {
            "id": "1",
            "status": "Active"
        },
        {
            "id": "2",
            "status": "Saved"
        },
        {
            "id": "3",
            "status": "Fixing"
        }
    ],
    "roles": [
        {
            "id": "1",
            "name": "admin"
        },
        {
            "id": "2",
            "name": "coach"
        },
        {
            "id": "3",
            "name": "member"
        }
    ],
    "permissions": [
        {
            "id": "1",
            "name": "manage_users"
        },
        {
            "id": "2",
            "name": "manage_classes"
        },
        {
            "id": "3",
            "name": "manage_routines"
        },
        {
            "id": "4",
            "name": "manage_inventory"
        },
        {
            "id": "5",
            "name": "view_reports"
        }
    ],
    "users": [
        {
            "id": "1",
            "name": "Alice",
            "lastname": "Smith",
            "email": "alice.smith@example.com",
            "password": "password123",
            "phone": "01422366325",
            "fechaNac": "2003-10-14",
            "registerDate": "2023-10-01",
            "typeMembership": "",
            "role": "1"
        },
        {
            "id": "2",
            "name": "Bob",
            "lastname": "Johnson",
            "email": "bob.johnson@example.com",
            "password": "password123",
            "phone": "01422366325",
            "fechaNac": "1993-08-15",
            "registerDate": "2023-10-02",
            "typeMembership": "",
            "role": "2"
        },
        {
            "id": "3",
            "name": "Armando",
            "lastname": "Sanchez",
            "email": "Guitierrez@example.com",
            "password": "password123",
            "phone": "01422366325",
            "fechaNac": "1993-08-15",
            "registerDate": "2023-10-02",
            "typeMembership": "",
            "role": "2"
        },
        {
            "id": "4",
            "name": "Charlie",
            "lastname": "Brown",
            "email": "charlie.brown@example.com",
            "password": "password123",
            "phone": "01422366325",
            "fechaNac": "2008-10-14",
            "registerDate": "2023-10-03",
            "typeMembership": "1",
            "role": "3"
        },
        {
            "id": "5",
            "name": "David",
            "lastname": "Wilson",
            "email": "david.wilson@example.com",
            "password": "password123",
            "phone": "01422366325",
            "fechaNac": "2013-10-14",
            "registerDate": "2023-10-04",
            "typeMembership": "3",
            "role": "3"
        },
        {
            "id": "6",
            "name": "Emma",
            "lastname": "Davis",
            "email": "emma.davis@example.com",
            "password": "password123",
            "phone": "01422366325",
            "fechaNac": "2001-03-14",
            "registerDate": "2023-10-05",
            "typeMembership": "2",
            "role": "3"
        },
        {
            "id": "7",
            "name": "Frank",
            "lastname": "Miller",
            "email": "frank.miller@example.com",
            "password": "password123",
            "phone": "01422366325",
            "fechaNac": "2005-08-14",
            "registerDate": "2023-10-06",
            "typeMembership": "1",
            "role": "3"
        }
    ],
    "employees": [
        {
            "user_id": 1,
            "schedule": "08:00:00",
            "payment": 3000,
            "date_start": "2023-10-01",
            "id": "1"
        },
        {
            "user_id": 2,
            "schedule": "09:00:00",
            "payment": 1500,
            "date_start": "2023-10-05",
            "id": "2"
        }
    ],
    "type_memberships": [
        {
            "id": "1",
            "name": "Monthly",
            "duration": 30,
            "price": "501"
        },
        {
            "id": "2",
            "name": "Quarterly",
            "duration": 90,
            "price": 1500
        },
        {
            "id": "3",
            "name": "Yearly",
            "duration": 365,
            "price": 6000
        }
    ],
    "type_exercises": [
        {
            "id": "1",
            "name": "Strength"
        },
        {
            "id": "2",
            "name": "Flexibility"
        },
        {
            "id": "3",
            "name": "Core"
        },
        {
            "id": "4",
            "name": "Cardio"
        }
    ],
    "memberships": [
        {
            "id": "1",
            "user_id": 3,
            "type_membership": 1,
            "date_start": "2023-10-01",
            "date_finish": "2024-01-01",
            "offer": "10% off renewal",
            "status": "active"
        },
        {
            "id": "2",
            "user_id": 4,
            "type_membership": 2,
            "date_start": "2023-10-05",
            "date_finish": "2024-01-05",
            "offer": null,
            "status": "active"
        },
        {
            "id": "3",
            "user_id": 5,
            "type_membership": 1,
            "date_start": "2023-10-07",
            "date_finish": "2024-01-07",
            "offer": "5% off classes",
            "status": "active"
        },
        {
            "id": "4",
            "user_id": 6,
            "type_membership": 3,
            "date_start": "2023-10-10",
            "date_finish": "2024-01-10",
            "offer": "Free personal training session",
            "status": "active"
        }
    ],
    "user_roles": [
        {
            "user_id": 1,
            "role_id": 1,
            "id": "1"
        },
        {
            "user_id": 2,
            "role_id": 2,
            "id": "2"
        },
        {
            "user_id": 3,
            "role_id": 3,
            "id": "3"
        },
        {
            "user_id": 4,
            "role_id": 3,
            "id": "4"
        },
        {
            "user_id": 5,
            "role_id": 3,
            "id": "5"
        },
        {
            "user_id": 6,
            "role_id": 3,
            "id": "6"
        }
    ],
    "role_permissions": [
        {
            "role_id": 1,
            "permission_id": 1,
            "id": "dff2"
        },
        {
            "role_id": 1,
            "permission_id": 2,
            "id": "9c77"
        },
        {
            "role_id": 1,
            "permission_id": 3,
            "id": "f875"
        },
        {
            "role_id": 1,
            "permission_id": 4,
            "id": "13a9"
        },
        {
            "role_id": 1,
            "permission_id": 5,
            "id": "8305"
        },
        {
            "role_id": 2,
            "permission_id": 2,
            "id": "2f70"
        }
    ],
    "exercises": [
        {
            "id": "1",
            "name": "Push-Ups",
            "description": "Push-ups focus on chest and triceps.",
            "type": "1"
        },
        {
            "id": "2",
            "name": "Squats",
            "description": "Leg strength exercise targeting quadriceps.",
            "type": "1"
        },
        {
            "id": "3",
            "name": "Deadlift",
            "description": "Lifting weight from the ground.",
            "type": "1"
        },
        {
            "id": "4",
            "name": "Running",
            "description": "Cardio workout on treadmill.",
            "type": "4"
        },
        {
            "id": "5",
            "name": "Biceps Curls",
            "description": "Focus on upper arms.",
            "type": "1"
        },
        {
            "id": "6",
            "name": "Plank",
            "description": "Core stabilization exercise.",
            "type": "2"
        }
    ],
    "routines": [
        {
            "id": "1",
            "name": "Morning Strength",
            "difficulty": "Intermediate",
            "objective": "Build muscle strength",
            "coach_id": 2,
            "exercise_id": 1
        },
        {
            "id": "2",
            "name": "Leg Day",
            "difficulty": "Advanced",
            "objective": "Strengthen lower body",
            "coach_id": 7,
            "exercise_id": 2
        },
        {
            "id": "3",
            "name": "Cardio Burn",
            "difficulty": "Easy",
            "objective": "Improve cardiovascular endurance",
            "coach_id": 8,
            "exercise_id": 4
        },
        {
            "id": "4",
            "name": "Back Power",
            "difficulty": "Intermediate",
            "objective": "Develop back muscles",
            "coach_id": 2,
            "exercise_id": 3
        },
        {
            "id": "5",
            "name": "Core Blast",
            "difficulty": "Hard",
            "objective": "Build a stronger core",
            "coach_id": 8,
            "exercise_id": 6
        },
        {
            "id": "6",
            "name": "Bodyweight Routine",
            "difficulty": "Easy",
            "objective": "Increase mobility",
            "coach_id": 10,
            "exercise_id": 1
        }
    ],
    "routine_exercises": [
        {
            "routine_id": 1,
            "exercise_id": 1,
            "id": "7284"
        },
        {
            "routine_id": 1,
            "exercise_id": 2,
            "id": "8d5c"
        },
        {
            "routine_id": 2,
            "exercise_id": 2,
            "id": "508e"
        },
        {
            "routine_id": 2,
            "exercise_id": 7,
            "id": "dcf0"
        },
        {
            "routine_id": 3,
            "exercise_id": 4,
            "id": "4ae1"
        },
        {
            "routine_id": 3,
            "exercise_id": 14,
            "id": "4554"
        }
    ],
    "classes": [
        {
            "id": "1",
            "name": "Spinning",
            "capacity": "15",
            "coach_id": "2",
            "class_time": "2024-10-10T08:02",
            "status": "1"
        },
        {
            "id": "2",
            "name": "Yoga",
            "capacity": "15",
            "coach_id": "2",
            "class_time": "2024-10-15 08:00:00",
            "status": "1"
        },
        {
            "id": "3",
            "name": "Crossfit",
            "capacity": "12",
            "coach_id": "3",
            "class_time": "2024-10-17 12:00:00",
            "status": "2"
        },
        {
            "id": "4",
            "name": "KickBoxing",
            "capacity": "10",
            "coach_id": "2",
            "class_time": "2024-10-18 18:00:00",
            "status": "1"
        },
        {
            "id": "5",
            "name": "Aerobics",
            "capacity": "25",
            "coach_id": "2",
            "class_time": "2024-10-04T09:00",
            "status": "1"
        },
        {
            "id": "6",
            "name": "Spinning",
            "capacity": "18",
            "coach_id": "2",
            "class_time": "2024-10-31T00:00",
            "status": "1"
        },

    ],
    "reservations": [
        {
            "id": "1",
            "user_id": 3,
            "class_id": 1,
            "status": "canceled"
        },
        {
            "id": "2",
            "user_id": 4,
            "class_id": 2,
            "status": "canceled"
        },
        {
            "id": "3",
            "user_id": 5,
            "class_id": 3,
            "status": "confirmed"
        },
        {
            "id": "4",
            "user_id": 6,
            "class_id": 4,
            "status": "canceled"
        },
        {
            "id": "5",
            "user_id": 9,
            "class_id": 5,
            "status": "outstanding"
        },
        {
            "id": "6",
            "user_id": 11,
            "class_id": 6,
            "status": "canceled"
        }
    ],
    "progress": [
        {
            "id": "1",
            "user_id": "4",
            "date": "2024-09-20",
            "weight": "80.2",
            "bodyFat": "30",
            "muscleGain": "70",
            "benchPress": "60",
            "squats": "80",
            "deadLift": "50"
        },
        {
            "id": "2",
            "user_id": "4",
            "date": "2024-10-20",
            "weight": "80.2",
            "bodyFat": "30",
            "muscleGain": "60",
            "benchPress": "50",
            "squats": "45",
            "deadLift": "50"
        },
        {
            "id": "3",
            "user_id": "5",
            "date": "2024-08-25",
            "weight": "80.2",
            "bodyFat": "30",
            "muscleGain": "70",
            "benchPress": "60",
            "squats": "80",
            "deadLift": "50"
        },
        {
            "id": "4",
            "user_id": "5",
            "date": "2024-09-25",
            "weight": "75",
            "bodyFat": "45",
            "muscleGain": "60",
            "benchPress": "30",
            "squats": "80",
            "deadLift": "60"
        },
        {
            "id": "5",
            "user_id": "6",
            "date": "2024-07-10",
            "weight": "68.3",
            "bodyFat": "50",
            "muscleGain": "59",
            "benchPress": "25",
            "squats": "45",
            "deadLift": "51"
        },
        {
            "id": "6",
            "user_id": "6",
            "date": "2024-08-10",
            "weight": "90.5",
            "bodyFat": "69",
            "muscleGain": "59",
            "benchPress": "30",
            "squats": "50",
            "deadLift": "68"
        }
    ],
    "payments": [
        {
            "id": "1",
            "user_id": "3",
            "amount": "50",
            "payment_method": "2",
            "status": "1",
            "dayPayment": "2024-06-23"
        },
        {
            "id": "2",
            "user_id": "4",
            "amount": "30",
            "payment_method": "1",
            "status": "1",
            "dayPayment": "2024-04-29"
        },
        {
            "id": "3",
            "user_id": "5",
            "amount": "45",
            "payment_method": "2",
            "status": "2",
            "dayPayment": "2024-11-25"
        },
        {
            "id": "4",
            "user_id": "6",
            "amount": "60",
            "payment_method": "3",
            "status": "1",
            "dayPayment": "2024-08-15"
        },
        {
            "id": "5",
            "user_id": "7",
            "amount": "55",
            "payment_method": "1",
            "status": "3",
            "dayPayment": "2024-02-20"
        }
    ],
    "inventory": [
        {
            "id": "1",
            "equipment_name": "Yoga Mats",
            "quantity": 20,
            "location": "Main Room",
            "status": "1",
            "day_use": "2024-09-01"
        },
        {
            "id": "2",
            "equipment_name": "Dumbbells",
            "quantity": 50,
            "location": "Main Room",
            "status": "1",
            "day_use": "2024-10-01"
        },
        {
            "id": "3",
            "equipment_name": "Kettlebells",
            "quantity": 30,
            "location": "Main Room",
            "status": "1",
            "day_use": "2024-11-01"
        },
        {
            "id": "4",
            "equipment_name": "Treadmills",
            "quantity": 10,
            "location": "Main Room",
            "status": "1",
            "day_use": "2024-08-15"
        },
        {
            "id": "5",
            "equipment_name": "Rowing Machines",
            "quantity": 8,
            "location": "Main Room",
            "status": "3",
            "day_use": "2024-09-20"
        },
        {
            "id": "6",
            "equipment_name": "Ellipticals",
            "quantity": 5,
            "location": "Main Room",
            "status": "1",
            "day_use": "2024-09-10"
        },

    ],
    "reports": [
        {
            "id": "1",
            "type": "Attendance",
            "user_id": 2,
            "description": "October attendance report."
        },
        {
            "id": "2",
            "type": "Payment",
            "user_id": 8,
            "description": "Summary of payments in October."
        },
        {
            "id": "3",
            "type": "Inventory",
            "user_id": 7,
            "description": "Low stock alert: Spin bikes."
        },
        {
            "id": "4",
            "type": "Attendance",
            "user_id": 10,
            "description": "Weekly attendance report."
        },
        {
            "id": "5",
            "type": "Progress",
            "user_id": 11,
            "description": "Progress tracking: Routine 8."
        },
        {
            "id": "6",
            "type": "Payment",
            "user_id": 13,
            "description": "New payment registered: Membership."
        }
    ]
}

]

