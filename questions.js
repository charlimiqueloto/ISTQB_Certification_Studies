window.ISTQB_QUESTIONS = [
  {
    "set": "A",
    "number": "1",
    "id": "A-1",
    "points": "1 Point",
    "stem": "Which of the following statements describe a valid test objective?",
    "options": [
      {
        "id": "a",
        "text": "To prove that there are no unfixed defects in the system under test"
      },
      {
        "id": "b",
        "text": "To prove that there will be no failures after the implementation of the system into production"
      },
      {
        "id": "c",
        "text": "To reduce the risk level of the test object and to build confidence in the quality level"
      },
      {
        "id": "d",
        "text": "To verify that there are no untested combinations of inputs"
      }
    ],
    "selectCount": 1,
    "correct": [
      "c"
    ],
    "explanation": "a) Is not correct. It is impossible to prove that there are no defects\n                                            anymore in the system under test. See testing principle 1\n                                        b) Is not correct. See testing principle 7\n                                        c) Is correct. Testing finds defects and failures which reduces the level of\n                                            risk and at the same time gives more confidence in the quality level of\n                                            the test object\n                                        d) Is not correct. It is impossible to test all combinations of inputs (see\n                                            testing principle 2)",
    "lo": "FL-1.1.1",
    "kLevel": "K1"
  },
  {
    "set": "A",
    "number": "2",
    "id": "A-2",
    "points": "1 Point",
    "stem": "Which of the following options shows an example of test activities that contribute to success?",
    "options": [
      {
        "id": "a",
        "text": "Having testers involved during various software development lifecycle (SDLC) activities will help to detect defects in work products"
      },
      {
        "id": "b",
        "text": "Testers try not to disturb the developers while coding, so that the developers write better code"
      },
      {
        "id": "c",
        "text": "Testers collaborating with end users help to improve the quality of defect reports during component integration and system testing"
      },
      {
        "id": "d",
        "text": "Certified testers will design much better test cases than non-certified testers"
      }
    ],
    "selectCount": 1,
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. It is important that testers are involved from the beginning of\n                                            the software development lifecycle (SDLC). It will increase\n                                            understanding of design decisions and will detect defects early.\n                                        b) Is not correct. Both developers and testers will have more\n                                            understanding of each other's work products and how to test the code\n                                        c) Is not correct. End users will not help the testers in increasing the quality\n                                           of defect reports; also, users usually do not participate in low-level\n                                           testing levels like integration testing\n                                        d) Is not correct. Being certified does not automatically mean that the\n                                            tester will be better in test design\n\nQuestion Correct                                                  Explanation / Rationale                                Learning    K-Level    Number\nNumber Answer                                                                                                            Objective                 of\n  (#)                                                                                                                      (LO)                  Points",
    "lo": "FL-1.2.1",
    "kLevel": "K2"
  },
  {
    "set": "A",
    "number": "3",
    "id": "A-3",
    "points": "1 Point",
    "stem": "You have been assigned as a tester to a team producing a new system incrementally. You have\nnoticed that no changes have been made to the existing regression test cases for several iterations\nand no new regression defects were identified. Your manager is happy, but you are not. Which\ntesting principle explains your skepticism?",
    "options": [
      {
        "id": "a",
        "text": "Tests wear out"
      },
      {
        "id": "b",
        "text": "Absence-of-defects fallacy"
      },
      {
        "id": "c",
        "text": "Defects cluster together"
      },
      {
        "id": "d",
        "text": "Exhaustive testing is impossible"
      }
    ],
    "selectCount": 1,
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. This principle means that if the same tests are repeated over\n                                            and over again, eventually these tests no longer find any new defects.\n                                            This is probably why the tests all passed in this release as well\n                                         b) Is not correct. This principle says about the mistaken belief that just\n                                            finding and fixing a large number of defects will ensure the success of a\n                                            system\n                                         c) Is not correct. This principle says that a small number of components\n                                            usually contain most of the defects\n                                         d) Is not correct. This principle states that testing all combinations of\n                                            inputs and preconditions is not feasible",
    "lo": "FL-1.3.1",
    "kLevel": "K2"
  },
  {
    "set": "A",
    "number": "4",
    "id": "A-4",
    "points": "1 Point",
    "stem": "You work in a team that develops a mobile application for food ordering. In the current iteration the\nteam decided to implement the payment functionality.\n\nWhich of the following activities is a part of test analysis?",
    "options": [
      {
        "id": "a",
        "text": "Estimating that testing the integration with the payment service will take 8 person-days"
      },
      {
        "id": "b",
        "text": "Deciding that the team should test if it is possible to properly share payment between many users"
      },
      {
        "id": "c",
        "text": "Using boundary value analysis (BVA) to derive the test data for the test cases that check the correct payment processing for the minimum allowed amount to be paid"
      },
      {
        "id": "d",
        "text": "Analyzing the discrepancy between the actual result and expected result after executing a test case that checks the process of payment with a credit card, and reporting a defect"
      }
    ],
    "selectCount": 1,
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. Estimating the test effort is part of test planning\n                                         b) Is correct. This is an example of defining test conditions which is a part\n                                            of test analysis\n                                         c) Is not correct. Using test techniques to derive coverage items is a part\n                                            of test design\n                                         d) Is not correct. Reporting defects found during dynamic testing is a part\n                                            of test execution\n\nQuestion Correct                                                      Explanation / Rationale                                Learning    K-Level    Number\nNumber Answer                                                                                                                Objective                 of\n  (#)                                                                                                                          (LO)                  Points",
    "lo": "FL-1.4.1",
    "kLevel": "K2"
  },
  {
    "set": "A",
    "number": "5",
    "id": "A-5",
    "points": "1 Point",
    "stem": "Which of the following factors have a SIGNIFICANT influence on the test approach?\n\n                i.       The SDLC\n               ii.       The number of defects detected in previous projects\n              iii.       The identified product risks\n              iv.        New regulatory requirements forcing formal white-box testing\n               v.        The test environment setup",
    "options": [
      {
        "id": "a",
        "text": "i, ii have significant influence"
      },
      {
        "id": "b",
        "text": "i, iii, iv have significant influence"
      },
      {
        "id": "c",
        "text": "ii, iv, v have significant influence"
      },
      {
        "id": "d",
        "text": "iii, v have significant influence"
      }
    ],
    "selectCount": 1,
    "correct": [
      "b"
    ],
    "explanation": "i. Is true. The SDLC has an influence on the test approach\n                                                ii. Is false. The number of defects detected in previous projects may\n                                                    have some influence, but this is not as significant as i, iii and iv\n                                               iii. Is true. The identified product risks are one of the most important\n                                                    factors influencing the test approach\n                                               iv. Is true. Regulatory requirements are important factors influencing the\n                                                    test approach\n                                                v. Is false. The test environment has no significant influence on the test\n                                                    approach\n\n                                        Thus:\n                                        a) Is not correct\n                                        b) Is correct\n                                        c) Is not correct\n                                        d) Is not correct",
    "lo": "FL-1.4.2",
    "kLevel": "K2"
  },
  {
    "set": "A",
    "number": "6",
    "id": "A-6",
    "points": "1 Point",
    "stem": "Which TWO of the following tasks belong MAINLY to a testing role?",
    "options": [
      {
        "id": "a",
        "text": "Configure test environments"
      },
      {
        "id": "b",
        "text": "Maintain the product backlog"
      },
      {
        "id": "c",
        "text": "Design solutions to new requirements"
      },
      {
        "id": "d",
        "text": "Create the test plan"
      },
      {
        "id": "e",
        "text": "Analyze the test basis"
      }
    ],
    "selectCount": 2,
    "correct": [
      "a",
      "e"
    ],
    "explanation": "a) Is correct. This is done by the testers\n                                        b) Is not correct. The product backlog is built and maintained by the\n                                           product owner\n                                        c) Is not correct. This is done by the development team\n                                        d) Is not correct. This is a managerial role\n                                        e) Is correct. This is done by the testers since its technical task done as\n                                           part of a test analysis.\n\nQuestion Correct                                                      Explanation / Rationale                                  Learning    K-Level    Number\nNumber Answer                                                                                                                  Objective                 of\n  (#)                                                                                                                            (LO)                  Points",
    "lo": "FL-1.4.5",
    "kLevel": "K2"
  },
  {
    "set": "A",
    "number": "7",
    "id": "A-7",
    "points": "1 Point",
    "stem": "Which of the following skills (i-v) are the MOST important skills of a tester?\n\n                i.       Having domain knowledge\n               ii.       Creating a product vision\n              iii.       Being a good team player\n              iv.        Planning and organizing the work of the team\n               v.        Critical thinking",
    "options": [
      {
        "id": "a",
        "text": "ii and iv are important"
      },
      {
        "id": "b",
        "text": "i, iii and v are important"
      },
      {
        "id": "c",
        "text": "i, ii and v are important"
      },
      {
        "id": "d",
        "text": "iii and iv are important"
      }
    ],
    "selectCount": 1,
    "correct": [
      "b"
    ],
    "explanation": "i. Is true. Having domain knowledge is an important tester skill\n                                                ii. Is false. This is a task of the business analyst together with the\n                                                    business representative\n                                               iii. Is true. Being a good team player is an important skill\n                                               iv. Is false. Planning and organizing the work of the team is a task of the\n                                                    test manager or, mostly in an Agile software development project,\n                                                    the whole team and not just the tester\n                                                v. Is true. Critical thinking is one of the most important skills of testers\n\n                                        Thus:\n                                        a) Is not correct\n                                        b) Is correct\n                                        c) Is not correct\n                                        d) Is not correct",
    "lo": "FL-1.5.1",
    "kLevel": "K2"
  },
  {
    "set": "A",
    "number": "8",
    "id": "A-8",
    "points": "1 Point",
    "stem": "How is the whole team approach present in the interactions between testers and business\nrepresentatives?",
    "options": [
      {
        "id": "a",
        "text": "Business representatives decide on test automation approaches"
      },
      {
        "id": "b",
        "text": "Testers help business representatives to define a test strategy"
      },
      {
        "id": "c",
        "text": "Business representatives are not part of the whole team approach"
      },
      {
        "id": "d",
        "text": "Testers help business representatives to create suitable acceptance tests"
      }
    ],
    "selectCount": 1,
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. The test automation approach is defined by testers with\n                                            the help of developers and business representatives\n                                        b) Is not correct. The test strategy is decided in collaboration with the\n                                            developers\n                                        c) Is not correct. Testers, developers, and business representatives are\n                                            part of the whole team approach\n                                        d) Is correct. Testers will work closely with business representatives to\n                                            ensure that the desired quality levels are achieved. This includes\n                                            supporting and collaborating with them to help them create suitable\n                                            acceptance tests",
    "lo": "FL-1.5.2",
    "kLevel": "K1"
  },
  {
    "set": "A",
    "number": "9",
    "id": "A-9",
    "points": "1 Point",
    "stem": "Consider the following rule: “for every SDLC activity there is a corresponding test activity”. In which\nSDLC models does this rule hold?",
    "options": [
      {
        "id": "a",
        "text": "Only in sequential development models"
      },
      {
        "id": "b",
        "text": "Only in iterative development models"
      },
      {
        "id": "c",
        "text": "Only in iterative and incremental development models"
      },
      {
        "id": "d",
        "text": "In sequential, incremental, and iterative development models"
      }
    ],
    "selectCount": 1,
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct\n                                        b) Is not correct\n                                        c) Is not correct\n                                        d) Is correct. This rule holds for all SDLC models\n\nQuestion Correct                                                   Explanation / Rationale                                 Learning    K-Level    Number\nNumber Answer                                                                                                              Objective                 of\n  (#)                                                                                                                        (LO)                  Points",
    "lo": "FL-2.1.2",
    "kLevel": "K1"
  },
  {
    "set": "A",
    "number": "10",
    "id": "A-10",
    "points": "1 Point",
    "stem": "Which of the following statements BEST describes the acceptance test-driven development (ATDD)\napproach?",
    "options": [
      {
        "id": "a",
        "text": "In ATDD, acceptance criteria are typically created based on the given/when/then format"
      },
      {
        "id": "b",
        "text": "In ATDD, test cases are mainly created at component testing and are code-oriented"
      },
      {
        "id": "c",
        "text": "In ATDD, tests are created, based on acceptance criteria to drive the development of the related software"
      },
      {
        "id": "d",
        "text": "in ATDD, tests are based on the desired behavior of the software, which makes it easier for team members to understand them"
      }
    ],
    "selectCount": 1,
    "correct": [
      "c"
    ],
    "explanation": "a) Is not correct. It is more often used in behavior-driven development\n                                            (BDD)\n                                         b) Is not correct. It is the description of test-driven development (TDD)\n                                         c) Is correct. In acceptance test-driven development (ATDD) tests are\n                                            written from acceptance criteria as part of the design process\n                                         d) Is not correct. It is used in BDD",
    "lo": "FL-2.1.3",
    "kLevel": "K1"
  },
  {
    "set": "A",
    "number": "11",
    "id": "A-11",
    "points": "1 Point",
    "stem": "Which of the following is NOT an example of the shift-left approach?",
    "options": [
      {
        "id": "a",
        "text": "Reviewing the user requirements before they are formally accepted by the stakeholders"
      },
      {
        "id": "b",
        "text": "Writing a component test before the corresponding code is written"
      },
      {
        "id": "c",
        "text": "Executing a performance efficiency test for a component during component testing"
      },
      {
        "id": "d",
        "text": "Writing a test script before setting up the configuration management process"
      }
    ],
    "selectCount": 1,
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. Early review is an example of the shift-left approach\n                                         b) Is not correct. TDD is an example of the shift-left approach\n                                         c) Is not correct. Early non-functional testing is an example of the shift-left\n                                            approach\n                                         d) Is correct. Test scripts should be subject to configuration management,\n                                            so it makes no sense to create the test scripts before this process is set\n                                            up",
    "lo": "FL-2.1.5",
    "kLevel": "K2"
  },
  {
    "set": "A",
    "number": "12",
    "id": "A-12",
    "points": "1 Point",
    "stem": "Which of the arguments below would you use to convince your manager to organize retrospectives\nat the end of each release cycle?",
    "options": [
      {
        "id": "a",
        "text": "Retrospectives are very popular these days and clients would appreciate it if we added them to our processes"
      },
      {
        "id": "b",
        "text": "Organizing retrospectives will save the organization money because without them end user representatives do not provide immediate feedback about the product"
      },
      {
        "id": "c",
        "text": "Process weaknesses identified during the retrospective can be analyzed and serve as a to do list for the organization’s continuous process improvement program"
      },
      {
        "id": "d",
        "text": "Retrospectives embrace five values including courage and respect, which are crucial to maintain continuous improvement in the organization"
      }
    ],
    "selectCount": 1,
    "correct": [
      "c"
    ],
    "explanation": "a) Is not correct. Retrospectives are more useful for identifying\n                                            improvement opportunities and have little importance for clients\n                                         b) Is not correct. Retrospectives are not aimed to collect feedback about\n                                            the product, but about the process. Additionally, retrospectives are\n                                            internal activity for the team and should not include end user\n                                            representatives\n                                         c) Is correct. Regularly conducted retrospectives, when appropriate follow\n                                            up activities occur, are critical to continual improvement of development\n                                            and testing\n                                         d) Is not correct. Courage and respect are values of Extreme\n                                            Programming and are not closely related to retrospectives\n\nQuestion Correct                           Explanation / Rationale                                                         Learning    K-Level    Number\nNumber Answer                                                                                                              Objective                 of\n  (#)                                                                                                                        (LO)                  Points",
    "lo": "FL-2.1.6",
    "kLevel": "K2"
  },
  {
    "set": "A",
    "number": "13",
    "id": "A-13",
    "points": "1 Point",
    "stem": "Which types of failures (1-4) fit which test levels (A-D) BEST?\n\n                  1.     Failures in system behavior as it deviates from the user’s business needs\n                  2.     Failures in communication between components\n                  3.     Failures in logic in the code\n                  4.     Failures in not correctly implemented business rules\n\n                  A. Component testing\n                  B. Component integration testing\n                  C. System testing\n                  D. Acceptance testing",
    "options": [
      {
        "id": "a",
        "text": "1D, 2B, 3A, 4C"
      },
      {
        "id": "b",
        "text": "1D, 2B, 3C, 4A"
      },
      {
        "id": "c",
        "text": "1B, 2A, 3D, 4C"
      },
      {
        "id": "d",
        "text": "1C, 2B, 3A, 4D"
      }
    ],
    "selectCount": 1,
    "correct": [
      "a"
    ],
    "explanation": "Considering:\n                      • The test basis for acceptance testing is the user’s business needs\n                          (1D)\n                      • Communication between components is tested during component\n                          integration testing (2B)\n                      • Failures in logic can be found during component testing (3A)\n                      • Business rules are the test basis for system testing (4C)\n\n                                        Thus:\n                                         a) Is correct\n                                         b) Is not correct\n                                         c) Is not correct\n                                         d) Is not correct",
    "lo": "FL-2.2.1",
    "kLevel": "K2"
  },
  {
    "set": "A",
    "number": "14",
    "id": "A-14",
    "points": "1 Point",
    "stem": "You are testing a user story with three acceptance criteria: AC1, AC2 and AC3. AC1 is covered by\ntest case TC1, AC2 by TC2, and AC3 by TC3. The test execution history had three test runs on three\nconsecutive versions of the software as follows:\n\n                                                         Execution 1    Execution 2    Execution 3\n                                       TC1                 (1) Failed    (4) Passed     (7) Passed\n                                       TC2                (2) Passed      (5) Failed    (8) Passed\n                                       TC3                 (3) Failed     (6) Failed    (9) Passed\n\nTests are repeated once you are informed that all defects found in the test run are corrected and\na new version of the software is available.\nWhich of the above tests are executed as regression tests?",
    "options": [
      {
        "id": "a",
        "text": "Only 4, 7, 8, 9"
      },
      {
        "id": "b",
        "text": "Only 5, 7"
      },
      {
        "id": "c",
        "text": "Only 4, 6, 8, 9"
      },
      {
        "id": "d",
        "text": "Only 5, 6"
      }
    ],
    "selectCount": 1,
    "correct": [
      "b"
    ],
    "explanation": "Because TC1 and TC3 failed in Execution 1 (i.e., test (1) and test (3)), test\n                                        (4) and test (6) are confirmation tests.\n                                        Because TC2 and TC3 failed in Execution 2 (i.e., tests (5) and (6)), test (8)\n                                        and test (9) are also confirmation tests.\n                                        TC2 passed in Execution 1 (i.e., test (2)), so test (5) is a regression test.\n                                        TC1 passed in the Execution 2 (i.e., test (4)), so test (7) is also a regression\n                                        test.\n\n                                         Thus:\n                                         a) Is not correct\n                                         b) Is correct\n                                         c) Is not correct\n                                         d) Is not correct\n\nQuestion Correct                                                  Explanation / Rationale                              Learning    K-Level    Number\nNumber Answer                                                                                                          Objective                 of\n  (#)                                                                                                                    (LO)                  Points",
    "lo": "FL-2.2.3",
    "kLevel": "K2"
  },
  {
    "set": "A",
    "number": "15",
    "id": "A-15",
    "points": "1 Point",
    "stem": "Which of the following is NOT a benefit of static testing?",
    "options": [
      {
        "id": "a",
        "text": "Having less expensive defect management due to the ease of detecting defects later in the SDLC"
      },
      {
        "id": "b",
        "text": "Fixing defects found during static testing is generally much less expensive than fixing defects found during dynamic testing"
      },
      {
        "id": "c",
        "text": "Finding coding defects that might not have been found by only performing dynamic testing"
      },
      {
        "id": "d",
        "text": "Detecting gaps and inconsistencies in requirements"
      }
    ],
    "selectCount": 1,
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. Defect management is no less expensive. Finding and fixing\n                                            defects later in the SDLC is more costly\n                                         b) Is not correct. This is a benefit of static testing\n                                         c) Is not correct. This is a benefit of static testing\n                                         d) Is not correct. This is a benefit of static testing",
    "lo": "FL-3.1.2",
    "kLevel": "K2"
  },
  {
    "set": "A",
    "number": "16",
    "id": "A-16",
    "points": "1 Point",
    "stem": "Which of the following is a benefit of early and frequent feedback?",
    "options": [
      {
        "id": "a",
        "text": "It improves the test process for future projects"
      },
      {
        "id": "b",
        "text": "It forces customers to prioritize their requirements based on agreed risks"
      },
      {
        "id": "c",
        "text": "It provides a measure for the quality of changes"
      },
      {
        "id": "d",
        "text": "It helps avoid requirements misunderstandings"
      }
    ],
    "selectCount": 1,
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. Feedback can improve the test process, but if one only\n                                            wants to improve future projects, the feedback does not need to come\n                                            early or frequently\n                                         b) Is not correct. Feedback is not used to prioritize requirements\n                                         c) Is not correct. There is no one, recommended way to measure quality\n                                            of changes. Also, this is not one of the benefits of early feedback that\n                                            are mentioned in section 3.2.1\n                                         d) Is correct. Early and frequent feedback can prevent misunderstandings\n                                            about requirements\n\nQuestion Correct                           Explanation / Rationale                                                   Learning    K-Level    Number\nNumber Answer                                                                                                        Objective                 of\n  (#)                                                                                                                  (LO)                  Points",
    "lo": "FL-3.2.1",
    "kLevel": "K1"
  },
  {
    "set": "A",
    "number": "17",
    "id": "A-17",
    "points": "1 Point",
    "stem": "The reviews being used in your organization have the following attributes:\n\n             •      There is the role of a scribe\n             •      The main purpose is to evaluate quality\n             •      The meeting is led by the author of the work product\n             •      There is individual preparation\n             •      A review report is produced\nWhich of the following review types is MOST likely being used?",
    "options": [
      {
        "id": "a",
        "text": "Informal review"
      },
      {
        "id": "b",
        "text": "Walkthrough"
      },
      {
        "id": "c",
        "text": "Technical review"
      },
      {
        "id": "d",
        "text": "Inspection"
      }
    ],
    "selectCount": 1,
    "correct": [
      "b"
    ],
    "explanation": "Considering the attributes:\n                   • Specified for walkthroughs, technical reviews, and inspections; thus,\n                       the reviews being performed cannot be informal reviews\n                   • The purpose of evaluating quality is one of the most important\n                       objectives of a walkthrough\n                   • This is not allowed for inspections and is typically not done in\n                       technical reviews. A moderator is needed in walkthroughs and is\n                       allowed for informal reviews\n                   • All types of reviews can include individual preparation (even informal\n                       reviews)\n                   • All types of reviews can produce a review report, although informal\n                       reviews do not require documentation\n\n                                         Thus:\n                                         a) Is not correct\n                                         b) Is correct\n                                         c) Is not correct\n                                         d) Is not correct",
    "lo": "FL-3.2.4",
    "kLevel": "K2"
  },
  {
    "set": "A",
    "number": "18",
    "id": "A-18",
    "points": "1 Point",
    "stem": "Which of these statements is NOT a factor that contributes to successful reviews?",
    "options": [
      {
        "id": "a",
        "text": "Participants should dedicate adequate time for the review"
      },
      {
        "id": "b",
        "text": "Splitting large work products into small parts to make the required effort less intense"
      },
      {
        "id": "c",
        "text": "Participants should avoid behaviors that might indicate boredom, exasperation, or hostility to other participants"
      },
      {
        "id": "d",
        "text": "Failures found should be acknowledged, appreciated, and handled objectively"
      }
    ],
    "selectCount": 1,
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. Adequate time for individuals is a success factor\n                                         b) Is not correct. Splitting work products into small adequate parts is a\n                                            success factor\n                                         c) Is not correct. Avoiding behaviors that might indicate boredom,\n                                            exasperation, etc. is a success factor\n                                         d) Is correct. During reviews one can find defects, not failures\n\nQuestion Correct                                                  Explanation / Rationale                               Learning    K-Level    Number\nNumber Answer                                                                                                           Objective                 of\n  (#)                                                                                                                     (LO)                  Points",
    "lo": "FL-3.2.5",
    "kLevel": "K1"
  },
  {
    "set": "A",
    "number": "19",
    "id": "A-19",
    "points": "1 Point",
    "stem": "Which of the following is a characteristic of experience-based test techniques?",
    "options": [
      {
        "id": "a",
        "text": "Test cases are created based on detailed design information"
      },
      {
        "id": "b",
        "text": "Items tested within the interface code section are used to measure coverage"
      },
      {
        "id": "c",
        "text": "The test techniques heavily rely on the tester’s knowledge of the software and the business domain"
      },
      {
        "id": "d",
        "text": "The test cases are used to identify deviations from the requirements"
      }
    ],
    "selectCount": 1,
    "correct": [
      "c"
    ],
    "explanation": "a) Is not correct. This is a common characteristic of white-box test\n                                            techniques. Test conditions, test cases, and test data are derived from\n                                            a test basis that may include code, software architecture, detailed\n                                            design, or any other source of information regarding the structure of the\n                                            software.\n                                         b) Is not correct. This is a common characteristic of white-box test\n                                            techniques. Coverage is measured based on the items tested within a\n                                            selected structure and the test technique applied to the test basis\n                                         c) Is correct. This is a common characteristic of experience-based test\n                                            techniques. This knowledge and experience include expected use of\n                                            the software, its environment, likely defects, and the distribution of\n                                            those defects is used to define tests\n                                         d) Is not correct. This is a common characteristic of black-box test\n                                            techniques. Test cases may be used to detect gaps within requirements\n                                            and the implementation of the requirements, as well as deviations from\n                                            the requirements\n\nQuestion Correct                           Explanation / Rationale                                                   Learning    K-Level    Number\nNumber Answer                                                                                                        Objective                 of\n  (#)                                                                                                                  (LO)                  Points",
    "lo": "FL-4.1.1",
    "kLevel": "K2"
  },
  {
    "set": "A",
    "number": "20",
    "id": "A-20",
    "points": "1 Point",
    "stem": "You are testing a simplified apartment search form which has only two search criteria:\n\n             •      floor (with three possible options: ground floor; first floor; second or higher floor)\n             •      garden type (with three possible options: no garden; small garden; large garden)\n\nEach of the apartment on the ground floor has a garden, apartments on higher floors don’t. The form\nhas a built-in validation mechanism that will not allow you to use the search criteria which violate this\nrule.\n\nEach test has two input values: floor and garden type. You want to apply equivalence partitioning\n(EP) to cover each floor and each garden type in your tests.\n\nWhat is the minimal number of test cases to achieve 100% EP coverage for valid partitions?",
    "options": [
      {
        "id": "a",
        "text": "3"
      },
      {
        "id": "b",
        "text": "4"
      },
      {
        "id": "c",
        "text": "5"
      },
      {
        "id": "d",
        "text": "6 Select ONE option"
      }
    ],
    "selectCount": 1,
    "correct": [
      "b"
    ],
    "explanation": "The situation presented in the question is described in the syllabus as “each\n                 choice” coverage.\n\n                                       “Small garden” and “large garden” can go only with “ground floor”, so we\n                                       need two test cases with “ground floor” which cover these two “garden type”\n                                       partitions.\n                                       We need two more test cases to cover the two other “floor” partitions. The\n                                       remaining ”garden type” partition of “no garden” is covered by these tests.\n                                       We need a total of four test cases:\n                                               TC1 (ground floor, small garden)\n                                               TC2 (ground floor, large garden)\n                                               TC3 (first floor, no garden)\n                                               TC4 (second or higher floor, no garden)\n\n                                        Thus:\n                                        a) Is not correct\n                                        b) Is correct\n                                        c) Is not correct\n                                        d) Is not correct\n\nQuestion Correct                            Explanation / Rationale                                                   Learning    K-Level    Number\nNumber Answer                                                                                                         Objective                 of\n  (#)                                                                                                                   (LO)                  Points",
    "lo": "FL-4.2.1",
    "kLevel": "K3"
  },
  {
    "set": "A",
    "number": "21",
    "id": "A-21",
    "points": "1 Point",
    "stem": "You are testing a system that calculates the final course grade for a given student.\n\nThe final grade is assigned based on the final result, according to the following rules:\n\n             •      0 – 50 points: failed\n             •      51 – 60 points: fair\n             •      61 – 70 points: satisfactory\n             •      71 – 80 points: good\n             •      81 – 90 points: very good\n             •      91 – 100 points: excellent\n\nYou have prepared the following set of test cases:\n\n                                     Final                  Final\n                                    result                  grade\n                  TC1                 91                  excellent\n                  TC2                 50                    failed\n                  TC3                 81                  very good\n                  TC4                 60                      fair\n                  TC5                 70                 satisfactory\n                  TC6                 80                    good\n\nWhat is the 2-value boundary value analysis (BVA) coverage for the final result that is achieved with\nthe existing test cases?",
    "options": [
      {
        "id": "a",
        "text": "50%"
      },
      {
        "id": "b",
        "text": "60%"
      },
      {
        "id": "c",
        "text": "33.3%"
      },
      {
        "id": "d",
        "text": "100%"
      }
    ],
    "selectCount": 1,
    "correct": [
      "a"
    ],
    "explanation": "There are 12 boundary values for the final result values: 0, 50, 51, 60, 61,\n                 70, 71, 80, 81, 90, 91, and 100.\n                 The test cases cover six of them (TC1 – 91, TC2 – 50, TC3 – 81, TC4 – 60,\n                 TC5 – 70 and TC7 – 51).\n                 Therefore, the test cases cover 6/12 = 50%.\n\n                                       Thus:\n                                        a) Is correct\n                                        b) Is not correct\n                                        c) Is not correct\n                                        d) Is not correct",
    "lo": "FL-4.2.2",
    "kLevel": "K3"
  },
  {
    "set": "A",
    "number": "22",
    "id": "A-22",
    "points": "1 Point",
    "stem": "Your favorite bicycle daily rental store has just introduced a new Customer Relationship\nManagement system and asked you, one of their most loyal members, to test it.\n\nThe implemented features are as follows:\n\n             •      Anyone can rent a bicycle, but members receive a 20% discount\n             •      However, if the return deadline is missed, the discount is no longer available\n             •      After 15 rentals, members get a gift: a T-Shirt\nDecision table describing the implemented features looks as follows:\n\n                            Conditions                   R1   R2    R3   R4   R5   R6   R7    R8\n                             Being a member              T    T     T    T    F    F    F     F\n                             Missed deadline             T    F     T    F    T    F    F     T\n                                  15th rental            F    F     T    T    F    F    T     T\n                            Actions\n                                20% discount                   X          X\n                                  Gift T-Shirt                      X     X                    X\n\nBased ONLY on the feature description of the Customer Relationship Management system, which\nof the above rules describes an impossible situation?",
    "options": [
      {
        "id": "a",
        "text": "R4"
      },
      {
        "id": "b",
        "text": "R2"
      },
      {
        "id": "c",
        "text": "R6"
      },
      {
        "id": "d",
        "text": "R8"
      }
    ],
    "selectCount": 1,
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. A member without a missed deadline can get a discount\n                                           and a gift T-Shirt after 15 bicycle rentals\n                                        b) Is not correct. A member without a missed deadline can get a discount\n                                           but no gift T-Shirt until they rented a bicycle 15 times\n                                        c) Is not correct. Non-members cannot get a discount, even if they did not\n                                           miss a deadline yet\n                                        d) Is correct. No discount as a non-member that has also missed a\n                                           deadline, but only members can receive a gift T-Shirt. Hence, the action\n                                           is not correct\n\nQuestion Correct                             Explanation / Rationale                                                    Learning    K-Level    Number\nNumber Answer                                                                                                           Objective                 of\n  (#)                                                                                                                     (LO)                  Points",
    "lo": "FL-4.2.3",
    "kLevel": "K3"
  },
  {
    "set": "A",
    "number": "23",
    "id": "A-23",
    "points": "1 Point",
    "stem": "You test a system whose lifecycle is modeled by the state transition diagram shown below. The\nsystem starts in the INIT state and ends its operation in the OFF state.\n\nWhat is the MINIMAL number of test cases to achieve valid transitions coverage?",
    "options": [
      {
        "id": "a",
        "text": "4"
      },
      {
        "id": "b",
        "text": "2"
      },
      {
        "id": "c",
        "text": "7"
      },
      {
        "id": "d",
        "text": "3"
      }
    ],
    "selectCount": 1,
    "correct": [
      "d"
    ],
    "explanation": "“test” and “error” transitions cannot occur in one test case.\n                 Neither can both “done” transitions.\n                 This means we need at least three test cases to achieve transition\n                 coverage. For example:\n                        TC1: test, done\n                        TC2: run, error, done\n                        TC3: run, pause, resume, pause, done\n\n                                        Thus:\n                                        a) Is not correct\n                                        b) Is not correct\n                                        c) Is not correct\n                                        d) Is correct",
    "lo": "FL-4.2.4",
    "kLevel": "K3"
  },
  {
    "set": "A",
    "number": "24",
    "id": "A-24",
    "points": "1 Point",
    "stem": "Your test suite achieved 100% statement coverage. What is the consequence of this fact?",
    "options": [
      {
        "id": "a",
        "text": "Each instruction in the code that contains a defect has been executed at least once"
      },
      {
        "id": "b",
        "text": "Any test suite containing more test cases than your test suite will also achieve 100% statement coverage"
      },
      {
        "id": "c",
        "text": "Each path in the code has been executed at least once"
      },
      {
        "id": "d",
        "text": "Every combination of input values has been tested at least once"
      }
    ],
    "selectCount": 1,
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. Since 100% statement coverage is achieved, every\n                                           statement, including the ones with defects, must have been executed\n                                           and evaluated at least once\n                                        b) Is not correct. Coverage depends on what is tested, not on the number\n                                           of test cases. For example, for code “if (x==0) y=1”, one test case (x=0)\n                                           achieves 100% statement coverage, but two test cases (x=1) and (x=2)\n                                           together achieve only 50% statement coverage\n                                        c) Is not correct. If there is a loop in the code there may be an infinite\n                                           number of possible paths, so it is not possible to execute all the\n                                           possible paths in the code\n                                        d) Is not correct. Exhaustive testing is not possible (see the seven testing\n                                           principles section in the syllabus). For example, for code “input x; print\n                                           x” any single test with arbitrary x achieves 100% statement coverage,\n                                           but covers one input value\n\nQuestion Correct                                                  Explanation / Rationale                              Learning    K-Level    Number\nNumber Answer                                                                                                          Objective                 of\n  (#)                                                                                                                    (LO)                  Points",
    "lo": "FL-4.3.1",
    "kLevel": "K2"
  },
  {
    "set": "A",
    "number": "25",
    "id": "A-25",
    "points": "1 Point",
    "stem": "Which of the following is NOT true for white-box testing?",
    "options": [
      {
        "id": "a",
        "text": "During white-box testing the entire software implementation is considered"
      },
      {
        "id": "b",
        "text": "White-box coverage metrics can help identify additional tests to increase code coverage"
      },
      {
        "id": "c",
        "text": "White-box test techniques can be used in static testing"
      },
      {
        "id": "d",
        "text": "White-box testing can help identify gaps in requirements implementation"
      }
    ],
    "selectCount": 1,
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. The fundamental strength of white-box test techniques is\n                                            that the entire software implementation is taken into account during\n                                            testing\n                                         b) Is not correct. White-box coverage measures provide an objective\n                                            measure of coverage and provide the necessary information to allow\n                                            additional tests to be generated to increase this coverage\n                                         c) Is not correct. White-box test techniques can be used to perform\n                                            reviews (static testing)\n                                         d) Is correct. This is the weakness of the white-box test techniques. They\n                                            are not able to identify the missing implementation, because they are\n                                            based solely on the test object structure, not on the requirements\n                                            specification",
    "lo": "FL-4.3.3",
    "kLevel": "K2"
  },
  {
    "set": "A",
    "number": "26",
    "id": "A-26",
    "points": "1 Point",
    "stem": "Which of the following BEST describes the concept behind error guessing?",
    "options": [
      {
        "id": "a",
        "text": "Error guessing involves using your knowledge and experience of defects found in the past and typical errors made by developers"
      },
      {
        "id": "b",
        "text": "Error guessing involves using your personal experience of development and the errors you made as a developer"
      },
      {
        "id": "c",
        "text": "Error guessing requires you to imagine that you are the user of the test object and to guess errors the user could make interacting with it"
      },
      {
        "id": "d",
        "text": "Error guessing requires you to rapidly duplicate the development task to identify the sort of errors a developer might make"
      }
    ],
    "selectCount": 1,
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. The basic concept behind error guessing is that the tester\n                                            tries to guess what errors may have been made by the developer and\n                                            what defects may be in the test object based on past experience (and\n                                            sometimes checklists)\n                                         b) Is not correct. Although a tester who used to be a developer may use\n                                            their personal experience to help them when performing error guessing,\n                                            the test technique is not based on prior knowledge of development\n                                         c) Is not correct. Error guessing is not a usability technique for guessing\n                                            how users may fail to interact with the test object\n                                         d) Is not correct. Duplicating the development task has several flaws that\n                                            make it impractical, such as the tester having equivalent skills to the\n                                            developer and the time involved to perform the development. It is not\n                                            error guessing\n\nQuestion Correct                                                   Explanation / Rationale                                 Learning    K-Level    Number\nNumber Answer                                                                                                              Objective                 of\n  (#)                                                                                                                        (LO)                  Points",
    "lo": "FL-4.4.1",
    "kLevel": "K2"
  },
  {
    "set": "A",
    "number": "27",
    "id": "A-27",
    "points": "1 Point",
    "stem": "In your project there has been a delay in the release of a brand-new application and test execution\nstarted late, but you have very detailed domain knowledge and good analytical skills. The full list of\nrequirements has not yet been shared with the team, but management is asking for some test results\nto be presented.\n\nWhich test technique fits BEST in this situation?",
    "options": [
      {
        "id": "a",
        "text": "Checklist-based testing"
      },
      {
        "id": "b",
        "text": "Error guessing"
      },
      {
        "id": "c",
        "text": "Exploratory testing"
      },
      {
        "id": "d",
        "text": "Branch testing"
      }
    ],
    "selectCount": 1,
    "correct": [
      "c"
    ],
    "explanation": "a) Is not correct. This is a new product. You probably do not have a\n                                            checklist yet and test conditions might not be known due to missing\n                                            requirements\n                                         b) Is not correct. This is a new product. You probably do not have enough\n                                            information to make correct error guesses\n                                         c) Is correct. Exploratory testing is most useful when there are few known\n                                            specifications and/or there is a pressing timeline for testing\n                                         d) Is not correct. Branch testing is time-consuming, and your management\n                                            is asking about some test results now. Also, branch testing does not\n                                            involve domain knowledge",
    "lo": "FL-4.4.2",
    "kLevel": "K2"
  },
  {
    "set": "A",
    "number": "28",
    "id": "A-28",
    "points": "1 Point",
    "stem": "Which of the following BEST describes the way acceptance criteria can be documented?",
    "options": [
      {
        "id": "a",
        "text": "Performing retrospectives to determine the actual needs of the stakeholders regarding a given user story"
      },
      {
        "id": "b",
        "text": "Using the given/when/then format to describe an example test condition related to a given user story"
      },
      {
        "id": "c",
        "text": "Using verbal communication to reduce the risk of misunderstanding the acceptance criteria by others"
      },
      {
        "id": "d",
        "text": "Documenting risks related to a given user story in a test plan to facilitate the risk-based testing of a given user story"
      }
    ],
    "selectCount": 1,
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. Retrospectives are used to capture lessons learned and\n                                            to improve the development and testing process, not to document the\n                                            acceptance criteria\n                                         b) Is correct. This is the standard way to document acceptance criteria\n                                         c) Is not correct. Verbal communication does not allow to physically\n                                            document the acceptance criteria as part of a user story (”card” aspect\n                                            in the 3C’s model)\n                                         d) Is not correct. Acceptance criteria are related to a user story, not a test\n                                            plan. Also, acceptance criteria are the conditions that have to be fulfilled\n                                            to decide if the user story is complete. Risks are not such conditions",
    "lo": "FL-4.5.2",
    "kLevel": "K2"
  },
  {
    "set": "A",
    "number": "29",
    "id": "A-29",
    "points": "1 Point",
    "stem": "Consider the following user story:\n\n                    As an Editor\n                    I want to review content before it is published\n                    so that I can ensure the grammar is correct\n\nand its acceptance criteria:\n\n             •      The user can log in to the content management system with \"Editor\" role\n             •      The editor can view existing content pages\n             •      The editor can edit the page content\n             •      The editor can add markup comments\n             •      The editor can save changes\n             •      The editor can reassign to the \"content owner\" role to make updates\n\nWhich of the following is the BEST example of an ATDD test for this user story?",
    "options": [
      {
        "id": "a",
        "text": "Test if the editor can save the document after edit the page content"
      },
      {
        "id": "b",
        "text": "Test if the content owner can log in and make updates to the content"
      },
      {
        "id": "c",
        "text": "Test if the editor can schedule the edited content for publication"
      },
      {
        "id": "d",
        "text": "Test if the editor can reassign to another editor to make updates"
      }
    ],
    "selectCount": 1,
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. This test covers two acceptance criteria: one about editing\n                                            the document and one about saving changes\n                                         b) Is not correct. Acceptance criteria cover the editor activities, not the\n                                            content owner activities\n                                         c) Is not correct. Scheduling the edited content for publication may be a\n                                            nice feature, but it is not covered by the acceptance criteria\n                                         d) Is not correct. Acceptance criteria state about reassigning from an\n                                            editor to the content owner, not to another editor\n\nQuestion Correct                                                  Explanation / Rationale                                 Learning    K-Level    Number\nNumber Answer                                                                                                             Objective                 of\n  (#)                                                                                                                       (LO)                  Points",
    "lo": "FL-4.5.3",
    "kLevel": "K3"
  },
  {
    "set": "A",
    "number": "30",
    "id": "A-30",
    "points": "1 Point",
    "stem": "How do testers add value to iteration and release planning?",
    "options": [
      {
        "id": "a",
        "text": "Testers determine the priority of the user stories to be developed"
      },
      {
        "id": "b",
        "text": "Testers focus only on the functional aspects of the system to be tested"
      },
      {
        "id": "c",
        "text": "Testers participate in the detailed risk identification and risk assessment of user stories"
      },
      {
        "id": "d",
        "text": "Testers guarantee the release of high-quality software through early test design during the release planning"
      }
    ],
    "selectCount": 1,
    "correct": [
      "c"
    ],
    "explanation": "a) Is not correct. Priorities for user stories are determined by the business\n                                             representative together with the development team\n                                         b) Is not correct. Testers focus on both functional and non-functional\n                                             aspects of the system to be tested\n                                         c) Is correct. According to the syllabus, this is one of the ways testers add\n                                             value to iteration and release planning\n                                         d) Is not correct. Early test design is not part of release planning. Early\n                                             test design does not automatically guarantee the release of quality\n                                             software",
    "lo": "FL-5.1.2",
    "kLevel": "K1"
  },
  {
    "set": "A",
    "number": "31",
    "id": "A-31",
    "points": "1 Point",
    "stem": "Which TWO of the following options are the exit criteria for testing a system?",
    "options": [
      {
        "id": "a",
        "text": "Test environment readiness"
      },
      {
        "id": "b",
        "text": "The ability to log in to the test object by the tester"
      },
      {
        "id": "c",
        "text": "Estimated defect density is reached"
      },
      {
        "id": "d",
        "text": "Requirements are translated into given/when/then format"
      },
      {
        "id": "e",
        "text": "Regression tests are automated"
      }
    ],
    "selectCount": 2,
    "correct": [
      "c",
      "e"
    ],
    "explanation": "a) Is not correct. Test environment readiness is a resource availability\n                                             criterion; hence it belongs to the entry criteria\n                                         b) Is not correct. This is a resource availability criterion; hence it belongs\n                                             to the entry criteria\n                                         c) Is correct. Estimated defect density is a measure of diligence; hence it\n                                             belongs to the exit criteria.\n                                         d) Is not correct. Requirements translated into a given format result in\n                                             testable requirements; hence it belongs to the entry criteria\n                                         e) Is correct. Automation of regression tests is a completion criterion;\n                                             hence it belongs to the exit criteria",
    "lo": "FL-5.1.3",
    "kLevel": "K2"
  },
  {
    "set": "A",
    "number": "32",
    "id": "A-32",
    "points": "1 Point",
    "stem": "Your team uses the three-point estimation technique to estimate the test effort for a new high-risk\nfeature. The following estimates were made:\n\n             •      Most optimistic estimation: 2 person-hours\n             •      Most likely estimation: 11 person-hours\n             •      Most pessimistic estimation: 14 person-hours\n\nWhat is the final estimate?",
    "options": [
      {
        "id": "a",
        "text": "9 person-hours"
      },
      {
        "id": "b",
        "text": "14 person-hours"
      },
      {
        "id": "c",
        "text": "11 person-hours"
      },
      {
        "id": "d",
        "text": "10 person-hours"
      }
    ],
    "selectCount": 1,
    "correct": [
      "d"
    ],
    "explanation": "In the three-point estimation technique:\n                                               E = (optimistic + 4*most likely + pessimistic)/6\n                                               E = (2+(4*11)+14)/6 = 10\n\n                                        Thus:\n                                        a) Is not correct\n                                        b) Is not correct\n                                        c) Is not correct\n                                        d) Is correct\n\nQuestion Correct                          Explanation / Rationale                                                     Learning    K-Level    Number\nNumber Answer                                                                                                         Objective                 of\n  (#)                                                                                                                   (LO)                  Points",
    "lo": "FL-5.1.4",
    "kLevel": "K3"
  },
  {
    "set": "A",
    "number": "33",
    "id": "A-33",
    "points": "1 Point",
    "stem": "You are testing a mobile application that allows users to find a nearby restaurant based on the type\nof food they want to eat. Consider the following list of test cases, priorities (i.e., a smaller number\nmeans a higher priority), and dependencies:\n\n                          Test case                                                             Logical\n                                                    Test condition covered         Priority\n                           number                                                             dependency\n                           TC 001                        Select type of food          3          none\n                           TC 002                         Select restaurant           2         TC 001\n                           TC 003                           Get direction             1         TC 002\n                           TC 004                          Call restaurant            2         TC 002\n                           TC 005                        Make reservation             3         TC 002\n\nWhich of the following test cases should be executed as the third one?",
    "options": [
      {
        "id": "a",
        "text": "TC 003"
      },
      {
        "id": "b",
        "text": "TC 005"
      },
      {
        "id": "c",
        "text": "TC 002"
      },
      {
        "id": "d",
        "text": "TC 001"
      }
    ],
    "selectCount": 1,
    "correct": [
      "a"
    ],
    "explanation": "Test TC 001 must come first, followed by TC 002, to satisfy dependencies.\n                 Afterwards, TC 003 to satisfy priority and then TC 004, followed by TC 005.\n\n                                        Thus:\n                                        a) Is correct\n                                        b) Is not correct\n                                        c) Is not correct\n                                        d) Is not correct",
    "lo": "FL-5.1.5",
    "kLevel": "K3"
  },
  {
    "set": "A",
    "number": "34",
    "id": "A-34",
    "points": "1 Point",
    "stem": "Consider the following test categories (1-4) and agile testing quadrants (A-D):\n\n             1.     Usability testing\n             2.     Component testing\n             3.     Functional testing\n             4.     Reliability testing\n\n             A. Agile testing quadrant Q1: technology facing, supporting the development team\n             B. Agile testing quadrant Q2: business facing, supporting the development team\n             C. Agile testing quadrant Q3: business facing, critique the product\n             D. Agile testing quadrant Q4: technology facing, critique the product\n\nHow do the following test categories map onto the agile testing quadrants?",
    "options": [
      {
        "id": "a",
        "text": "1C, 2A, 3B, 4D"
      },
      {
        "id": "b",
        "text": "1D, 2A, 3C, 4B"
      },
      {
        "id": "c",
        "text": "1C, 2B, 3D, 4A"
      },
      {
        "id": "d",
        "text": "1D, 2B, 3C, 4A"
      }
    ],
    "selectCount": 1,
    "correct": [
      "a"
    ],
    "explanation": "Considering:\n                                           • Usability testing is in Q3 (1 – C)\n                                           • Component testing is in Q1 (2 – A)\n                                           • Functional testing is in Q2 (3 – B)\n                                           • Reliability testing is in Q4 (4 – D)\n\n                                        Thus:\n                                        a) Is correct\n                                        b) Is not correct\n                                        c) Is not correct\n                                        d) Is not correct",
    "lo": "FL-5.1.7",
    "kLevel": "K2"
  },
  {
    "set": "A",
    "number": "35",
    "id": "A-35",
    "points": "1 Point",
    "stem": "During a risk analysis the following risk was identified and assessed:\n\n             •     Risk: Response time is too long to generate a report\n             •     Risk likelihood: medium; risk impact: high\n             •     Response to risk:\n                  o An independent test team performs performance efficiency testing during system\n                      testing\n                  o A selected sample of end users performs alpha testing and beta testing before the\n                      release\nWhat measure is proposed to be taken in response to this analyzed risk?",
    "options": [
      {
        "id": "a",
        "text": "Risk acceptance"
      },
      {
        "id": "b",
        "text": "Contingency plan"
      },
      {
        "id": "c",
        "text": "Risk mitigation"
      },
      {
        "id": "d",
        "text": "Risk transfer"
      }
    ],
    "selectCount": 1,
    "correct": [
      "c"
    ],
    "explanation": "a) Is not correct. We do not accept the risk; concrete actions are proposed\n                                        b) Is not correct. No contingency plans are proposed\n                                        c) Is correct. The proposed actions are related to testing, which is a form\n                                           of risk mitigation\n                                        d) Is not correct. Risk is not transferred but mitigated\n\nQuestion Correct                                                  Explanation / Rationale                               Learning    K-Level    Number\nNumber Answer                                                                                                           Objective                 of\n  (#)                                                                                                                     (LO)                  Points",
    "lo": "FL-5.2.4",
    "kLevel": "K2"
  },
  {
    "set": "A",
    "number": "36",
    "id": "A-36",
    "points": "1 Point",
    "stem": "Which work product can be used by an agile team to show the amount of work that has been\ncompleted and the amount of total work remaining for a given iteration?",
    "options": [
      {
        "id": "a",
        "text": "Acceptance criteria"
      },
      {
        "id": "b",
        "text": "Defect report"
      },
      {
        "id": "c",
        "text": "Test completion report"
      },
      {
        "id": "d",
        "text": "Burndown chart"
      }
    ],
    "selectCount": 1,
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. Acceptance criteria are the conditions used to decide\n                                            whether the user story is ready. They cannot show work progress\n                                         b) Is not correct. Defect reports inform about the defects. They do not\n                                            show work progress\n                                         c) Is not correct. Test completion report can be created after the iteration\n                                            is finished, so it will not show the progress continuously within an\n                                            iteration\n                                         d) Is correct. Burndown charts are a graphical representation of work left\n                                            to do versus time remaining. They are updated daily, so they can\n                                            continuously show the work progress",
    "lo": "FL-5.3.3",
    "kLevel": "K2"
  },
  {
    "set": "A",
    "number": "37",
    "id": "A-37",
    "points": "1 Point",
    "stem": "You need to update one of the automated test scripts to be in line with a new requirement. Which\nprocess indicates that you create a new version of the test script in the test repository?",
    "options": [
      {
        "id": "a",
        "text": "Traceability management"
      },
      {
        "id": "b",
        "text": "Maintenance testing"
      },
      {
        "id": "c",
        "text": "Configuration management"
      },
      {
        "id": "d",
        "text": "Requirements engineering"
      }
    ],
    "selectCount": 1,
    "correct": [
      "c"
    ],
    "explanation": "a) Is not correct. Traceability is the relationship between two or more work\n                                            products, not between different versions of the same work product\n                                         b) Is not correct. Maintenance testing is about testing changes; it is not\n                                            related closely to versioning\n                                         c) Is correct. To support testing, configuration management may involve\n                                            the version control of all test items\n                                         d) Is not correct. Requirements engineering is the elicitation,\n                                            documentation, and management of requirements; it is not closely\n                                            related to test script versioning\n\nQuestion Correct                                                    Explanation / Rationale                                   Learning    K-Level    Number\nNumber Answer                                                                                                                 Objective                 of\n  (#)                                                                                                                           (LO)                  Points",
    "lo": "FL-5.4.1",
    "kLevel": "K2"
  },
  {
    "set": "A",
    "number": "38",
    "id": "A-38",
    "points": "1 Point",
    "stem": "You received the following defect report from the developers stating that the anomaly described in\nthis test report is not reproducible.\n\n                    Application hangs up\n\n                    2022-May-03 – John Doe – Rejected\n\n                    The application hangs up after entering “Test input: $ä” in the Name field on the new\n                    user creation screen. Tried to log off, log in with test_admin01 account, same issue. Tried\n                    with other test admin accounts, same issue. No error message received; log (see\n                    attached) contains fatal error notification. Based on the test case TC-1305, the\n                    application should accept the provided input and create the user. Please fix with high\n                    priority, this feature is related to REQ-0012, which is a critical new business requirement.\n\nWhat critical information is MISSING from this test report that would have been useful for the\ndevelopers?",
    "options": [
      {
        "id": "a",
        "text": "Expected result and actual result"
      },
      {
        "id": "b",
        "text": "References and defect status"
      },
      {
        "id": "c",
        "text": "Test environment and test item"
      },
      {
        "id": "d",
        "text": "Priority and severity"
      }
    ],
    "selectCount": 1,
    "correct": [
      "c"
    ],
    "explanation": "a) Is not correct. The expected result is “the application should accept the\n                                            provided input and create the user”. The actual result is “The\n                                            application hangs up after entering “Test input. $ä””.\n                                         b) Is not correct. There is a reference to the test case and to the related\n                                            requirement and it states that the defect is rejected. Also, the defect\n                                            status would not be very helpful for the developers\n                                         c) Is correct. We do not know in which test environment the anomaly was\n                                            detected, and we also do not know which application (and its version) is\n                                            affected\n                                         d) Is not correct. The defect report states that the anomaly is urgent, that it\n                                            is a global issue (i.e., many, if not all, test administration accounts are\n                                            affected) and states the impact is high for business stakeholders",
    "lo": "FL-5.5.1",
    "kLevel": "K3"
  },
  {
    "set": "A",
    "number": "39",
    "id": "A-39",
    "points": "1 Point",
    "stem": "Which test activity does a data preparation tool support?",
    "options": [
      {
        "id": "a",
        "text": "Test monitoring and test control"
      },
      {
        "id": "b",
        "text": "Test analysis"
      },
      {
        "id": "c",
        "text": "Test design and test implementation"
      },
      {
        "id": "d",
        "text": "Test completion"
      }
    ],
    "selectCount": 1,
    "correct": [
      "c"
    ],
    "explanation": "a) Is not correct. Test monitoring involves the ongoing checking of all\n                                            activities and comparison of actual progress against the test plan. Test\n                                            control involves taking the actions necessary to meet the test objectives\n                                            of the test plan. No test data are prepared during these activities.\n                                         b) Is not correct. Test analysis includes analysis of the test basis to\n                                            identify test conditions and prioritize them. Test data are not prepared\n                                            during this activity.\n                                         c) Is correct. Test design and implementation can both include the\n                                            identification, creation or acquisition of the testware necessary for test\n                                            execution (e.g., test data).\n                                         d) Is not correct. Test completion activities occur at project milestones\n                                            (e.g., release, end of iteration, test level completion), so it is too late for\n                                            preparing test data.\n\nQuestion Correct                                                 Explanation / Rationale                              Learning    K-Level    Number\nNumber Answer                                                                                                         Objective                 of\n  (#)                                                                                                                   (LO)                  Points",
    "lo": "FL-6.1.1",
    "kLevel": "K2"
  },
  {
    "set": "A",
    "number": "40",
    "id": "A-40",
    "points": "1 Point",
    "stem": "Which item correctly identifies a potential risk of performing test automation?",
    "options": [
      {
        "id": "a",
        "text": "It may introduce unknown regressions in production"
      },
      {
        "id": "b",
        "text": "Sufficient efforts to maintain testware may not be properly allocated"
      },
      {
        "id": "c",
        "text": "Testing tools and associated testware may not be sufficiently relied upon"
      },
      {
        "id": "d",
        "text": "It may reduce the time allocated for manual testing"
      }
    ],
    "selectCount": 1,
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. Test automation does not introduce unknown regressions\n                                            in production\n                                         b) Is correct. Wrong allocation of effort to maintain testware is a risk\n                                         c) Is not correct. Test tools must be selected so that they and their\n                                            testware can be relied upon\n                                         d) Is not correct. The primary goal of test automation is to reduce manual\n                                            testing. So, this is a benefit, not a risk\n\nAppendix: Answer Key for Additional Sample Questions\n  Question                  Correct Answer                LO       K-Level   Points       Question    Correct Answer     LO          K-Level    Points\n Number (#)                                                                              Number (#)",
    "lo": "FL-6.2.1",
    "kLevel": "K1"
  },
  {
    "set": "A",
    "number": "A1",
    "id": "A-A1",
    "points": "1 Point",
    "stem": "You were given a task to analyze and fix causes of failures in a new system to be released.\n\nWhich activity are you performing?",
    "options": [
      {
        "id": "a",
        "text": "Debugging"
      },
      {
        "id": "b",
        "text": "Software testing"
      },
      {
        "id": "c",
        "text": "Requirement elicitation"
      },
      {
        "id": "d",
        "text": "Defect management"
      }
    ],
    "selectCount": 1,
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. Debugging is the process of finding, analyzing, and removing\n                                            the causes of failures in a component or system\n                                         b) Is not correct. Testing is the process concerned with planning,\n                                            preparation and evaluation of a component or system and related work\n                                            products to determine that they satisfy specified requirements, to\n                                            demonstrate that they are fit for purpose and to detect defects. It is not\n                                            related to fixing causes of failures\n                                         c) Is not correct. Requirement elicitation is the process of gathering,\n                                            capturing, and consolidating requirements from available sources. It is\n                                            not related to fixing causes of failures\n                                         d) Is not correct. Defect management is the process of recognizing,\n                                            recording, classifying, investigating, resolving, and disposing of defects.\n                                            It is not related to fixing causes of failures\n\nQuestion Correct                             Explanation / Rationale                                                Learning    K-Level    Number\nNumber Answer                                                                                                       Objective                 of\n  (#)                                                                                                                 (LO)                  Points",
    "lo": "FL-1.1.2",
    "kLevel": "K2"
  },
  {
    "set": "A",
    "number": "A2",
    "id": "A-A2",
    "points": "1 Point",
    "stem": "In many software organizations the test department is called the Quality Assurance (QA) department.\nIs this sentence correct or not and why?",
    "options": [
      {
        "id": "a",
        "text": "It is correct. Testing and QA mean exactly the same thing"
      },
      {
        "id": "b",
        "text": "It is correct. These names can be used interchangeably because both testing and QA focus their activities on the same quality issues"
      },
      {
        "id": "c",
        "text": "It is not correct. Testing is something more; testing includes all activities with regard to quality. QA focuses on quality-related processes"
      },
      {
        "id": "d",
        "text": "It is not correct. QA is focused on quality-related processes while testing concentrates on demonstrating that a component or system is fit for purpose and to detect defects"
      }
    ],
    "selectCount": 1,
    "correct": [
      "d"
    ],
    "explanation": "Considering:\n                      Testing and quality assurance are not the same. Testing is the\n                      process consisting of all software development lifecycle (SDLC)\n                      activities, both static and dynamic, concerned with planning,\n                      preparation and evaluation of a component or system and related\n                      work products to determine that they satisfy specified requirements, to\n                      demonstrate that they are fit for purpose and to detect defects. Quality\n                      assurance is focused on establishing, introducing, monitoring,\n                      improving, and adhering to the quality-related processes.\n\n                                         Thus:\n                                         a) Is not correct\n                                         b) Is not correct\n                                         c) Is not correct\n                                         d) Is correct",
    "lo": "FL-1.2.2",
    "kLevel": "K1"
  },
  {
    "set": "A",
    "number": "A3",
    "id": "A-A3",
    "points": "1 Point",
    "stem": "A phone ringing in a neighboring cubicle distracts a programmer causing him to improperly program\nthe logic that checks the upper boundary of an input variable. Later, during system testing, a tester\nnotices that this input field accepts invalid input values.\n\nWhich of the following correctly describes an incorrectly coded upper bound?",
    "options": [
      {
        "id": "a",
        "text": "The root cause"
      },
      {
        "id": "b",
        "text": "A failure"
      },
      {
        "id": "c",
        "text": "An error"
      },
      {
        "id": "d",
        "text": "A defect"
      }
    ],
    "selectCount": 1,
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. The root cause is the distraction that the programmer\n                                             experienced while programming\n                                         b) Is not correct. Accepting invalid inputs is a failure\n                                         c) Is not correct. The error in thinking that put the defect in the code\n                                         d) Is correct. The problem in the code is a defect",
    "lo": "FL-1.2.3",
    "kLevel": "K2"
  },
  {
    "set": "A",
    "number": "A4",
    "id": "A-A4",
    "points": "1 Point",
    "stem": "Consider the following testware.\n\n                  Test Charter #04.018                    Session time: 1h\n                  Explore:                     Registration page\n                  With:                        Different sets of incorrect input data\n                                               Defects related to accepting the registration process with the\n                  To discover:\n                                               incorrect input\n\nWhich test activity produces this testware as an output?",
    "options": [
      {
        "id": "a",
        "text": "Test planning"
      },
      {
        "id": "b",
        "text": "Test monitoring and test control"
      },
      {
        "id": "c",
        "text": "Test analysis"
      },
      {
        "id": "d",
        "text": "Test design"
      }
    ],
    "selectCount": 1,
    "correct": [
      "d"
    ],
    "explanation": "The testware under consideration is a test charter\n                                         Test charters are the output from test design\n\n                                         Thus:\n                                         a) Is not correct\n                                         b) Is not correct\n                                         c) Is not correct\n                                         d) Is correct\n\nQuestion Correct                                                   Explanation / Rationale                                 Learning    K-Level    Number\nNumber Answer                                                                                                              Objective                 of\n  (#)                                                                                                                        (LO)                  Points",
    "lo": "FL-1.4.3",
    "kLevel": "K2"
  },
  {
    "set": "A",
    "number": "A5",
    "id": "A-A5",
    "points": "1 Point",
    "stem": "Which of the following is the BEST example of how traceability supports testing?",
    "options": [
      {
        "id": "a",
        "text": "Performing the impact analysis of a change will give information about the completion of the tests"
      },
      {
        "id": "b",
        "text": "Analyzing the traceability between test cases and test results will give information about the estimated level of residual risk"
      },
      {
        "id": "c",
        "text": "Performing the impact analysis of a change will help selecting the right test cases for regression testing"
      },
      {
        "id": "d",
        "text": "Analyzing the traceability between the test basis, the test objects and the test cases will help in selecting test data to achieve the assumed coverage of the test object"
      }
    ],
    "selectCount": 1,
    "correct": [
      "c"
    ],
    "explanation": "a) Is not correct. Performing the impact analysis will not give information\n                                            about completeness of tests. Analyzing the impact analysis of changes\n                                            will help to select the right test cases for execution\n                                         b) Is not correct. Traceability does not give information about the\n                                            estimated level of residual risk if the test cases are not traced back to\n                                            risks\n                                         c) Is correct. Performing the impact analysis of the changes helps in\n                                            selecting the test cases for the regression test\n                                         d) Is not correct. Analyzing the traceability between the test basis, test\n                                            objects and test cases does not help in selecting test data to achieve\n                                            the assumed coverage of the test object. Selecting test data is more\n                                            related to test analysis and test implementation, not traceability",
    "lo": "FL-1.4.4",
    "kLevel": "K2"
  },
  {
    "set": "A",
    "number": "A6",
    "id": "A-A6",
    "points": "1 Point",
    "stem": "Which of the following BEST explains a benefit of independence of testing?",
    "options": [
      {
        "id": "a",
        "text": "The use of an independent test team allows project management to assign responsibility for the quality of the final deliverable to the test team"
      },
      {
        "id": "b",
        "text": "If a test team external to the organization can be afforded, then there are distinct benefits in terms of this external team not being so easily swayed by the delivery concerns of project management and the need to meet strict delivery deadlines"
      },
      {
        "id": "c",
        "text": "An independent test team can work separately from the developers, need not be distracted with project requirement changes, and can restrict communication with the developers to defect reporting through the defect management system"
      },
      {
        "id": "d",
        "text": "When specifications contain ambiguities and inconsistencies, assumptions are made on their interpretation, and an independent tester can be useful in questioning those assumptions and the interpretation made by the developer"
      }
    ],
    "selectCount": 1,
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. Quality should be the responsibility of everyone working\n                                            on the project and not the sole responsibility of the test team\n                                         b) Is not correct. First, it is not a benefit if an external test team does not\n                                            meet delivery deadlines, and second, there is no reason to believe that\n                                            external test teams will feel they do not have to meet strict delivery\n                                            deadlines\n                                         c) Is not correct. It is bad practice for the test team to work in complete\n                                            isolation, and we would expect an external test team to be concerned\n                                            with changing project requirements and communicating well with\n                                            developers\n                                         d) Is correct. Specifications are never perfect, meaning that assumptions\n                                            will have to be made by the developer. An independent tester is useful\n                                            in that they can challenge and verify the assumptions and subsequent\n                                            interpretation made by the developer\n\nQuestion Correct                                                   Explanation / Rationale                               Learning    K-Level    Number\nNumber Answer                                                                                                            Objective                 of\n  (#)                                                                                                                      (LO)                  Points",
    "lo": "FL-1.5.3",
    "kLevel": "K2"
  },
  {
    "set": "A",
    "number": "A7",
    "id": "A-A7",
    "points": "1 Point",
    "stem": "You are working as a tester in the team that follows the V-model. Which of the following activities\nCAN be performed in the initial phases of the SDLC?",
    "options": [
      {
        "id": "a",
        "text": "Dynamic test execution"
      },
      {
        "id": "b",
        "text": "Static testing"
      },
      {
        "id": "c",
        "text": "Test planning"
      },
      {
        "id": "d",
        "text": "Acceptance test execution"
      },
      {
        "id": "e",
        "text": "Maintenance testing"
      }
    ],
    "selectCount": 2,
    "correct": [
      "b",
      "c"
    ],
    "explanation": "a) Is not correct. The executable code is usually created in the later\n                                             phases, so dynamic test execution cannot be performed early in the\n                                             SDLC\n                                         b) Is correct. In sequential development models, in the initial phases,\n                                             testers participate in requirement reviews, which is a form of static\n                                             testing.\n                                         c) Is correct. Test planning could be performed early in the SDLC before\n                                             the test project begins together with test analysis and test design.\n                                         d) Is not correct. Acceptance test execution can be performed when there\n                                             is a working product. In sequential SDLC models the working product is\n                                             usually delivered later in the SDLC\n                                         e) Is not correct. Maintenance testing when there is a working and\n                                             deployed product, which is not done in the early phases of any SDLC.",
    "lo": "FL-2.1.1",
    "kLevel": "K2"
  },
  {
    "set": "A",
    "number": "A8",
    "id": "A-A8",
    "points": "1 Point",
    "stem": "Which of the following are advantages of DevOps?\n\n                i.       Faster product release and faster time to market\n               ii.       Increases the need for repetitive manual testing\n              iii.       Constant availability of executable software\n              iv.        Reduction in the number of regression tests associated with code refactoring\n               v.        Setting up the test automation framework is inexpensive since everything is\n                         automated",
    "options": [
      {
        "id": "a",
        "text": "i, ii, iv are advantages"
      },
      {
        "id": "b",
        "text": "iii, v are advantages"
      },
      {
        "id": "c",
        "text": "i, iii are advantages"
      },
      {
        "id": "d",
        "text": "ii, iv, v are advantages"
      }
    ],
    "selectCount": 1,
    "correct": [
      "c"
    ],
    "explanation": "Consider:\n                                              i. Is true. Faster product release and faster time to market is an\n                                                 advantage of DevOps\n                                             ii. Is false. Typically, we need less effort for manual tests because of\n                                                 the use of test automation\n                                            iii. Is true. Constant availability of executable software is an advantage\n                                            iv. Is false. More regression tests are needed\n                                             v. Is false. Not everything is automated and setting up a test\n                                                 automation framework is expensive\n\n                                         Thus:\n                                         a) Is not correct\n                                         b) Is not correct\n                                         c) It is correct\n                                         d) Is not correct\n\nQuestion Correct                                                  Explanation / Rationale                               Learning    K-Level    Number\nNumber Answer                                                                                                           Objective                 of\n  (#)                                                                                                                     (LO)                  Points",
    "lo": "FL-2.1.4",
    "kLevel": "K2"
  },
  {
    "set": "A",
    "number": "A9",
    "id": "A-A9",
    "points": "1 Point",
    "stem": "You work as a tester on a project on a mobile application for food ordering for one of your clients.\nThe client sent you a list of requirements. One of them, with high priority, says\n\n                     “The order must be processed in less than 10 seconds in 95% of the cases”.\n\nYou created a set of test cases in which a number of random orders were made, the processing time\nmeasured, and the test results were checked against the requirements.\n\nWhat test type did you perform?",
    "options": [
      {
        "id": "a",
        "text": "Functional, because the test cases cover the user’s business requirement for the system"
      },
      {
        "id": "b",
        "text": "Non-functional, because they measure the system’s performance"
      },
      {
        "id": "c",
        "text": "Functional, because the test cases interact with the user interface"
      },
      {
        "id": "d",
        "text": "White-box, because we need to know the internal structure of the program to measure the order processing time"
      }
    ],
    "selectCount": 1,
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. The fact that the requirement about the system’s\n                                            performance comes directly from the client and that the performance is\n                                            important from the business point of view (i.e., high priority) does not\n                                            make these tests functional, because they do not check “what” the\n                                            system does, but “how” (i.e., how fast the orders are processed)\n                                         b) Is correct. This is an example of testing for performance efficiency, a\n                                            type of non-functional testing\n                                         c) Is not correct. From the scenario, we do not know if interacting with the\n                                            user interface is a part of the test conditions. But even if we did, the\n                                            main test objective of these tests is to check the performance, not the\n                                            usability\n                                         d) Is not correct. We do not need to know the internal structure of the code\n                                            to perform the performance efficiency testing. One can execute\n                                            performance efficiency tests without structural knowledge",
    "lo": "FL-2.2.2",
    "kLevel": "K2"
  },
  {
    "set": "A",
    "number": "A10",
    "id": "A-A10",
    "points": "1 Point",
    "stem": "Your organization’s test strategy suggests that once a system is going to be retired, data migration\nshall be tested. As part of what test type is this testing MOST likely to be performed?",
    "options": [
      {
        "id": "a",
        "text": "Maintenance testing"
      },
      {
        "id": "b",
        "text": "Regression testing"
      },
      {
        "id": "c",
        "text": "Reliability testing"
      },
      {
        "id": "d",
        "text": "Integration testing"
      }
    ],
    "selectCount": 1,
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. When a system is retired, this can require testing of data\n                                            migration, which is a form of maintenance testing\n                                         b) Is not correct. Regression testing verifies whether a fix accidentally\n                                            affected the behavior of other parts of the code, but now we are talking\n                                            about data migration to a new system\n                                         c) Is not correct. Portability testing focuses on transferring the system to\n                                            another environment\n                                         d) Is not correct. Integration testing focuses on interactions between\n                                            components and/or systems, not on data migration. Also, it is not a test\n                                            type, but a test level.\n\nQuestion Correct                           Explanation / Rationale                                                       Learning    K-Level    Number\nNumber Answer                                                                                                            Objective                 of\n  (#)                                                                                                                      (LO)                  Points",
    "lo": "FL-2.3.1",
    "kLevel": "K2"
  },
  {
    "set": "A",
    "number": "A11",
    "id": "A-A11",
    "points": "1 Point",
    "stem": "The following is a list of the work products produced in the SDLC.\n\n                 i.       Business requirements\n                ii.       Schedule\n               iii.       Test budget\n               iv.        Third-party executable code\n                v.        User stories and their acceptance criteria\n\nWhich of them can be reviewed?",
    "options": [
      {
        "id": "a",
        "text": "i and iv can be reviewed"
      },
      {
        "id": "b",
        "text": "i, ii, iii and iv can be reviewed"
      },
      {
        "id": "c",
        "text": "i, ii, iii, and v can be reviewed"
      },
      {
        "id": "d",
        "text": "iii, iv, v can be reviewed"
      }
    ],
    "selectCount": 1,
    "correct": [
      "c"
    ],
    "explanation": "Only third-party executable code cannot be reviewed.\n\n                                         Thus:\n                                         a) Is not correct\n                                         b) Is not correct\n                                         c) It is correct\n                                         d) Is not correct",
    "lo": "FL-3.1.1",
    "kLevel": "K1"
  },
  {
    "set": "A",
    "number": "A12",
    "id": "A-A12",
    "points": "1 Point",
    "stem": "Decide which of the following statements (i-v) are true for static testing.\n\n                i.       Abnormal external behaviors are easier to identify with this testing\n               ii.       Discrepancies from a coding standard are easier to find with this testing\n              iii.       It identifies failures caused by defects when the software is run\n              iv.        Its test objective is to identify defects as early as possible\n               v.        Missing coverage for critical security requirements is easier to find and fix",
    "options": [
      {
        "id": "a",
        "text": "i, iv, v are true for static testing"
      },
      {
        "id": "b",
        "text": "i, iii, iv are true for static testing"
      },
      {
        "id": "c",
        "text": "ii, iii are true for static testing"
      },
      {
        "id": "d",
        "text": "ii, iv, v are true for static testing"
      }
    ],
    "selectCount": 1,
    "correct": [
      "d"
    ],
    "explanation": "Consider:\n                                              i. These behaviors are easily detectable while the software is running.\n                                                 Hence, dynamic testing shall be used to identify them\n                                             ii. This is an example of deviations from standards, which is a typical\n                                                 defect that is easier found with static testing\n                                            iii. If the software is executed during the test, it is dynamic testing\n                                            iv. Identifying defects as early as possible is the test objective of both\n                                                 static testing and dynamic testing\n                                             v. This is an example of gaps in the test basis traceability or coverage,\n                                                 which is a typical defect that is easier found with static testing\n\n                                         Thus:\n                                         a) Is not correct\n                                         b) Is not correct\n                                         c) Is not correct\n                                         d) Is correct",
    "lo": "FL-3.1.3",
    "kLevel": "K2"
  },
  {
    "set": "A",
    "number": "A13",
    "id": "A-A13",
    "points": "1 Point",
    "stem": "Which of the following statements about formal reviews is TRUE?",
    "options": [
      {
        "id": "a",
        "text": "Some reviews do not require more than one role"
      },
      {
        "id": "b",
        "text": "The review process has several activities"
      },
      {
        "id": "c",
        "text": "Documentation to be reviewed is not distributed before the review meeting, with the exception of the work product for specific review types"
      },
      {
        "id": "d",
        "text": "Defects found during the review are not reported since they are not found by dynamic testing"
      }
    ],
    "selectCount": 1,
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. In all types of reviews there is more than one role, even\n                                            in informal ones\n                                         b) Is correct. There are several activities during the formal review process\n                                         c) Is not correct. Documentation to be reviewed should be distributed as\n                                            early as possible\n                                         d) Is not correct. Defects found during the review should be reported\n\nQuestion Correct                                                   Explanation / Rationale                                 Learning    K-Level    Number\nNumber Answer                                                                                                              Objective                 of\n  (#)                                                                                                                        (LO)                  Points",
    "lo": "FL-3.2.2",
    "kLevel": "K2"
  },
  {
    "set": "A",
    "number": "A14",
    "id": "A-A14",
    "points": "1 Point",
    "stem": "What task may management take on during a formal review?",
    "options": [
      {
        "id": "a",
        "text": "Taking overall responsibility for the review"
      },
      {
        "id": "b",
        "text": "Deciding what is to be reviewed"
      },
      {
        "id": "c",
        "text": "Ensuring the effective running of review meetings, and moderating, if necessary"
      },
      {
        "id": "d",
        "text": "Recording review information such as review decisions"
      }
    ],
    "selectCount": 1,
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. This is the task of the review leader\n                                        b) Is correct. This is the task of the management in a formal review\n                                        c) Is not correct. This is the task of the moderator\n                                        d) Is not correct. This is the task of the scribe",
    "lo": "FL-3.2.3",
    "kLevel": "K1"
  },
  {
    "set": "A",
    "number": "A15",
    "id": "A-A15",
    "points": "1 Point",
    "stem": "A wine storage system uses a control device that measures the wine cell temperature T (measured\nin °C, rounded to the nearest degree) and alarms the user if it deviates from the optimal value of\n12, according to the following rules:\n\n                  •      if T = 12, the system says, “optimal temperature”\n                  •      if T < 12, the system says, “temperature is too low!”\n                  •      if T > 12, the system says, “temperature is too high!”\n\nYou want to use the 3-point boundary value analysis (BVA) to verify the behavior of the control\ndevice. A test input is a temperature in °C provided by the device.\n\nWhat is the MINIMAL set of test inputs that achieves 100% of the desired coverage?",
    "options": [
      {
        "id": "a",
        "text": "11, 12, 13"
      },
      {
        "id": "b",
        "text": "10, 12, 14"
      },
      {
        "id": "c",
        "text": "10, 11, 12, 13, 14"
      },
      {
        "id": "d",
        "text": "10, 11, 13, 14"
      }
    ],
    "selectCount": 1,
    "correct": [
      "c"
    ],
    "explanation": "There are three equivalence partitions: {..., 10, 11}, {12}, and {13, 14, ...}.\n                                       The boundary values are 11, 12 and 13. In the three-point boundary value\n                                       analysis for each boundary, we need to test the boundary and both its\n                                       neighbors, so:\n                                            • for 11 we test 10, 11, 12\n                                            • for 12 we test 11, 12, 13\n                                            • for 13 we test 12, 13, 14\n                                        Altogether we need to test 10, 11, 12, 13, and 14\n\n                                         Thus:\n                                         a) Is not correct\n                                         b) Is not correct\n                                         c) Is correct\n                                         d) Is not correct",
    "lo": "FL-4.2.2",
    "kLevel": "K3"
  },
  {
    "set": "A",
    "number": "A16",
    "id": "A-A16",
    "points": "1 Point",
    "stem": "Which of the following statements about branch testing is CORRECT?",
    "options": [
      {
        "id": "a",
        "text": "If a program includes only unconditional branches, then 100% branch coverage can be achieved without executing any test cases"
      },
      {
        "id": "b",
        "text": "If the test cases exercise all unconditional branches in the code, then 100% branch coverage is achieved"
      },
      {
        "id": "c",
        "text": "If 100% statement coverage is achieved, then 100% branch coverage is also achieved"
      },
      {
        "id": "d",
        "text": "If 100% branch coverage is achieved, then all decision outcomes in each decision statement in the code are exercised"
      }
    ],
    "selectCount": 1,
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. In this case one test case is still needed since there is at\n                                            least one (unconditional) branch to be covered\n                                         b) Is not correct. Covering only unconditional branches does not imply\n                                            covering all conditional branches\n                                         c) Is not correct. 100% branch coverage implies 100% statement\n                                            coverage, not otherwise. For example, for an IF decision without the\n                                            ELSE, one test is enough to achieve 100% statement coverage, but it\n                                            only achieves 50% branch coverage\n                                         d) Is correct. Each decision outcome corresponds to a conditional branch,\n                                            so 100% branch coverage implies 100% coverage of the decision\n                                            outcomes\n\nQuestion Correct                                                   Explanation / Rationale                                 Learning    K-Level    Number\nNumber Answer                                                                                                              Objective                 of\n  (#)                                                                                                                        (LO)                  Points",
    "lo": "FL-4.3.2",
    "kLevel": "K2"
  },
  {
    "set": "A",
    "number": "A17",
    "id": "A-A17",
    "points": "1 Point",
    "stem": "You are testing a mobile application that allows customers to access and manage their bank\naccounts. You are running a test suite that involves evaluating each screen, and each field on each\nscreen, against a general list of user interface best practices derived from a popular book on the\ntopic that maximizes usability for such applications. Which of the following options BEST categorizes\nthe test technique you are using?",
    "options": [
      {
        "id": "a",
        "text": "Black-box"
      },
      {
        "id": "b",
        "text": "Exploratory"
      },
      {
        "id": "c",
        "text": "Checklist-based"
      },
      {
        "id": "d",
        "text": "Error guessing"
      }
    ],
    "selectCount": 1,
    "correct": [
      "c"
    ],
    "explanation": "a) Is not correct. The book provides general guidance, and is not a formal\n                                            requirements document, a specification, or a set of use cases, user\n                                            stories, or business processes\n                                         b) Is not correct. While you could consider the list as a set of test charters,\n                                            it more closely resembles the list of test conditions to be checked\n                                         c) Is correct. The list of user interface best practices is the list of test\n                                            conditions to be systematically checked\n                                         d) Is not correct. The tests are not focused on failures that could occur, but\n                                            rather on knowledge about what is important for the user, in terms of\n                                            usability",
    "lo": "FL-4.4.3",
    "kLevel": "K2"
  },
  {
    "set": "A",
    "number": "A18",
    "id": "A-A18",
    "points": "1 Point",
    "stem": "Which of the following BEST describe the collaborative approach to user story writing?",
    "options": [
      {
        "id": "a",
        "text": "User stories are created by testers and developers and then accepted by business representatives"
      },
      {
        "id": "b",
        "text": "User stories are created by business representatives, developers, and testers together"
      },
      {
        "id": "c",
        "text": "User stories are created by business representatives and verified by developers and testers"
      },
      {
        "id": "d",
        "text": "User stories are created in a way that they are independent, negotiable, valuable, estimable, small, and testable"
      }
    ],
    "selectCount": 1,
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. Collaborative user story writing means that all\n                                            stakeholders create the user stories collaboratively, to obtain the\n                                            shared vision\n                                         b) Is correct. Collaborative user story writing means that all stakeholders\n                                            create the user stories collaboratively, to obtain the shared vision\n                                         c) Is not correct. Collaborative user story writing means that all\n                                            stakeholders create the user stories collaboratively, to obtain the\n                                            shared vision\n                                         d) Is not correct. This is the list of properties that each user story should\n                                            have, not the description of the collaboration-based approach",
    "lo": "FL-4.5.1",
    "kLevel": "K2"
  },
  {
    "set": "A",
    "number": "A19",
    "id": "A-A19",
    "points": "1 Point",
    "stem": "Consider the following part of a test plan.\n\n                    Testing will be performed using component testing and component integration testing.\n                    The regulations require to demonstrate that 100% branch coverage is achieved for\n                    each component classified as critical.\n\nWhich part of the test plan does this part belong to?",
    "options": [
      {
        "id": "a",
        "text": "Communication"
      },
      {
        "id": "b",
        "text": "Risk register"
      },
      {
        "id": "c",
        "text": "Context of testing"
      },
      {
        "id": "d",
        "text": "Test approach"
      }
    ],
    "selectCount": 1,
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. The paragraph contains information on test levels and\n                                            exit criteria, which are part of the test approach\n                                         b) Is not correct. The paragraph contains information on test levels and\n                                            exit criteria, which are part of the test approach\n                                         c) Is not correct. The paragraph contains information on test levels and\n                                            exit criteria, which are part of the test approach\n                                         d) Is correct. The paragraph contains information on test levels and exit\n                                            criteria, which are part of the test approach\n\nQuestion Correct                                                  Explanation / Rationale                                Learning    K-Level    Number\nNumber Answer                                                                                                            Objective                 of\n  (#)                                                                                                                      (LO)                  Points",
    "lo": "FL-5.1.1",
    "kLevel": "K2"
  },
  {
    "set": "A",
    "number": "A20",
    "id": "A-A20",
    "points": "1 Point",
    "stem": "Your team uses planning poker to estimate the test effort for a newly required feature. There is a\nrule in your team that if there is no time to reach full agreement and the variation in the results is\nsmall, rules like “accept the number with the most votes” can be applied.\n\nAfter two rounds, the consensus was not reached, so the third round was initiated. You can see the\ntest estimation results in the table below.\n\n                                                              Team members' estimations\n                                          Round 1        21    2    5  34     13     8    2\n                                          Round 2        13    8    8  34     13     8    5\n                                          Round 3        13    8   13  13     13    13    8\n\nWhich of the following is the BEST example of the next step?",
    "options": [
      {
        "id": "a",
        "text": "The product owner has to step in and make a final decision"
      },
      {
        "id": "b",
        "text": "Accept 13 as the final test estimate as this has most of the votes"
      },
      {
        "id": "c",
        "text": "No further action is needed. Consensus has been reached"
      },
      {
        "id": "d",
        "text": "Remove the new feature from the current release because consensus has not been reached"
      }
    ],
    "selectCount": 1,
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. This should be a team activity and not overruled by one\n                                            team member\n                                         b) Is correct. If test estimates are not the same, but the variation in the\n                                            results is small, applying rules like “accept the number with the most\n                                            votes” can be applied\n                                         c) Is not correct. There is no consensus yet as some say 13, others say 8\n                                         d) Is not correct. A feature should not be removed only because the team\n                                            cannot agree on the test estimates",
    "lo": "FL-5.1.4",
    "kLevel": "K3"
  },
  {
    "set": "A",
    "number": "A21",
    "id": "A-A21",
    "points": "1 Point",
    "stem": "Which of the following is TRUE regarding the test pyramid?",
    "options": [
      {
        "id": "a",
        "text": "It emphasizes having far more tests at the lower test levels"
      },
      {
        "id": "b",
        "text": "It suggests that each low-level test checks a large part of the functionality"
      },
      {
        "id": "c",
        "text": "It describes distribution of test types across the SDLC"
      },
      {
        "id": "d",
        "text": "It has no impact on the construction of automated tests"
      }
    ],
    "selectCount": 1,
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. The test pyramid emphasizes having a larger number of tests\n                                            at the lower test levels\n                                         b) Is not correct. It is not true that a test on a lower level tests a larger\n                                            piece of functionality. Tests are more atomic and oriented on a specific\n                                            logic, so it is the opposite\n                                         c) Is not correct. Test pyramid shows how the number of tests is\n                                            distributed across test levels\n                                         d) Is not correct. The test pyramid model supports the team in test\n                                            automation",
    "lo": "FL-5.1.6",
    "kLevel": "K1"
  },
  {
    "set": "A",
    "number": "A22",
    "id": "A-A22",
    "points": "1 Point",
    "stem": "During risk analysis the team considered the following risk: “The system allows too high a discount\nfor a customer”. The team estimated the risk impact to be very high.\n\nWhat can one say about the risk likelihood?",
    "options": [
      {
        "id": "a",
        "text": "It is also very high. High risk impact always implies high risk likelihood"
      },
      {
        "id": "b",
        "text": "It is very low. High risk impact always implies low risk likelihood"
      },
      {
        "id": "c",
        "text": "One cannot say anything about risk likelihood. Risk impact and risk likelihood are independent."
      },
      {
        "id": "d",
        "text": "Risk likelihood is not important with such a high-risk impact. One does not need to define it."
      }
    ],
    "selectCount": 1,
    "correct": [
      "c"
    ],
    "explanation": "a) Is not correct. Risk impact and risk likelihood are independent\n                                         b) Is not correct. Risk impact and risk likelihood are independent\n                                         c) Is correct. Risk impact and risk likelihood are independent\n                                         d) Is not correct. We need both factors to calculate risk level\n\nQuestion Correct                             Explanation / Rationale                                                     Learning    K-Level    Number\nNumber Answer                                                                                                            Objective                 of\n  (#)                                                                                                                      (LO)                  Points",
    "lo": "FL-5.2.1",
    "kLevel": "K1"
  },
  {
    "set": "A",
    "number": "A23",
    "id": "A-A23",
    "points": "1 Point",
    "stem": "The following list contains risks that have been identified for a new software product to be developed:\n\n                i.       Management moves two experienced testers to another project\n               ii.       The system does not comply with security standards\n              iii.       System response time exceeds user requirements\n              iv.        Stakeholders have inaccurate expectations\n               v.        Disabled people have problems when using the system\n\nWhich of them are project risks?",
    "options": [
      {
        "id": "a",
        "text": "i, iv are project risks"
      },
      {
        "id": "b",
        "text": "iv, v are project risks"
      },
      {
        "id": "c",
        "text": "i, iii are project risks"
      },
      {
        "id": "d",
        "text": "ii, v are project risks"
      }
    ],
    "selectCount": 1,
    "correct": [
      "a"
    ],
    "explanation": "Consider:\n                     i. It is a Project risk\n                    ii. It is a Product risk\n                   iii. It is a Product risk\n                   iv. It is a Project risk\n                    v. It is a Product risk\n\n                                         Thus:\n                                         a) Is correct\n                                         b) Is not correct\n                                         c) Is not correct\n                                         d) Is not correct",
    "lo": "FL-5.2.2",
    "kLevel": "K2"
  },
  {
    "set": "A",
    "number": "A24",
    "id": "A-A24",
    "points": "1 Point",
    "stem": "Which of the following is an example of how product risk analysis influences thoroughness and scope\nof testing?",
    "options": [
      {
        "id": "a",
        "text": "The test manager monitors and reports the level of all known risks on a daily basis so the stakeholders can make an informed decision on the release date"
      },
      {
        "id": "b",
        "text": "One of the identified risks was \"Lack of support of open-source databases\", so the team decided to integrate the system with an open-source database"
      },
      {
        "id": "c",
        "text": "During the quantitative risk analysis, the team estimated the total level of all identified risks and reported it as the total residual risk before testing"
      },
      {
        "id": "d",
        "text": "Risk assessment revealed a very high level of performance risks, so it was decided to perform detailed performance efficiency testing early in the SDLC"
      }
    ],
    "selectCount": 1,
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. This is an example of a risk monitoring activity, not risk\n                                            analysis\n                                         b) Is not correct. This is an example of an architectural decision, not\n                                            related with testing\n                                         c) Is not correct. This is an example of performing a quantitative risk\n                                            analysis and is not related to thoroughness or scope of testing\n                                         d) Is correct. This shows how risk analysis impacts the thoroughness of\n                                            testing (i.e., the level of detail)\n\nQuestion Correct                                                  Explanation / Rationale                               Learning    K-Level    Number\nNumber Answer                                                                                                           Objective                 of\n  (#)                                                                                                                     (LO)                  Points",
    "lo": "FL-5.2.3",
    "kLevel": "K2"
  },
  {
    "set": "A",
    "number": "A25",
    "id": "A-A25",
    "points": "1 Point",
    "stem": "Which TWO of the following options are common metrics used for reporting on the quality level of\nthe test object?",
    "options": [
      {
        "id": "a",
        "text": "Number of defects found during system testing"
      },
      {
        "id": "b",
        "text": "Total effort on test design divided by the number of designed test cases"
      },
      {
        "id": "c",
        "text": "Number of executed test procedures"
      },
      {
        "id": "d",
        "text": "Number of defects found divided by the size of a work product"
      },
      {
        "id": "e",
        "text": "Time needed to repair a defect"
      }
    ],
    "selectCount": 2,
    "correct": [
      "a",
      "d"
    ],
    "explanation": "a) Is correct. The number of defects found is related to the test object\n                                            quality\n                                         b) Is not correct. This is the measure of the test efficiency not the test\n                                            object quality\n                                         c) Is not correct. The number of test cases executed does not tell us\n                                            anything about the quality; test results might do\n                                         d) Is correct. defect density is related to the test object quality\n                                         e) Is not correct. Time to repair is a process metric. It does not tell us\n                                            anything about the product quality",
    "lo": "FL-5.3.1",
    "kLevel": "K1"
  },
  {
    "set": "A",
    "number": "A26",
    "id": "A-A26",
    "points": "1 Point",
    "stem": "Which of the following pieces of information contained in a test progress report is the LEAST useful\nfor business representatives?",
    "options": [
      {
        "id": "a",
        "text": "Impediments to testing"
      },
      {
        "id": "b",
        "text": "Branch coverage achieved"
      },
      {
        "id": "c",
        "text": "Test progress"
      },
      {
        "id": "d",
        "text": "New risks within the test cycle"
      }
    ],
    "selectCount": 1,
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. Impediments to testing can be high-level and business-\n                                            related, so this is an important piece of information for business\n                                            stakeholders\n                                         b) Is correct. Branch testing is a technical metric used by developers and\n                                            technical test analysts. This information is of no interest to business\n                                            representatives\n                                         c) Is not correct. Test progress is project related, so it may be useful for\n                                            business representatives\n                                         d) Is not correct. Risks impact product quality, so it may be useful for\n                                            business representatives",
    "lo": "FL-5.3.2",
    "kLevel": "K2"
  },
  {
    "set": "B",
    "number": "1",
    "id": "B-1",
    "points": "1 Point",
    "stem": "Which of the following is an example of why testing is necessary?",
    "options": [
      {
        "id": "a",
        "text": "Dynamic testing increases quality by causing test objects to fail in ways that could never be achieved by the users"
      },
      {
        "id": "b",
        "text": "Static testing is used by developers to identify failures in their code earlier than can be achieved through dynamic testing"
      },
      {
        "id": "c",
        "text": "Static analysis provides evidence to customers that the elements of the system that provide no outputs are fit for release"
      },
      {
        "id": "d",
        "text": "Reviews increase the quality of requirements specifications and lead to fewer changes being needed in derived work products"
      }
    ],
    "selectCount": 1,
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. It is often possible to use dynamic testing to cause a test\n                    object to fail in ways that could never be achieved by the users, such as\n                    by using fault injection. However, if the failure can never occur with real\n                    end users, then identifying it is not especially valuable as testing is\n                    ultimately aimed at improving the work product for the end users.\n                    Spending time testing for failures that cannot occur with real users is not\n                    an efficient use of a tester’s time\n                 b) Is not correct. Static testing in the form of static analysis is used by\n                    developers to identify defects in their code earlier than can be achieved\n                    through dynamic testing. Note, however, that static testing (and static\n                    analysis) is used to detect defects, not failures, which are found by\n                    dynamic testing. Thus it is the use of the term ‘failures’ that makes this\n                    an incorrect option\n                 c) Is not correct. Static analysis directly detects defects in code, and this is\n                    normally information for the developer, not the customer.\n                 d) Is correct. Reviews are a form of static testing that can be applied from\n                    the very start of the software development lifecycle and are used to find\n                    defects that can be removed before subsequent development activities\n                    waste effort on faulty requirements. If the defects are not detected and\n                    removed early on, then when the defect is found in derived work\n                    products, such as the design and code, the requirements will need to be\n                    changed.\n\nQuestion Correct                            Explanation / Rationale                             Learning    K-Level   Number\nNumber Answer                                                                                   Objective                of\n  (#)                                                                                             (LO)                 Points",
    "lo": "FL-1.2.1",
    "kLevel": "K2"
  },
  {
    "set": "B",
    "number": "2",
    "id": "B-2",
    "points": "1 Point",
    "stem": "Which of the following statements about quality assurance (QA) and/or quality control (QC) is\ncorrect?",
    "options": [
      {
        "id": "a",
        "text": "QA is performed as part of testing"
      },
      {
        "id": "b",
        "text": "Testing is performed as part of QC"
      },
      {
        "id": "c",
        "text": "Testing is another term for QC"
      },
      {
        "id": "d",
        "text": "Testing is performed as part of QA"
      }
    ],
    "selectCount": 1,
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. QA concentrates on process improvement and\n                    implementation, using a preventive approach to avoid errors and\n                    defects, while testing is a form of QC that is used to detect defects\n                 b) Is correct. QC aims to achieve appropriate levels of quality by focusing\n                    on identifying and correcting product defects. Testing is a significant\n                    part of QC and helps to uncover these defects\n                 c) Is not correct. Although testing is a significant part of QC and helps to\n                    uncover defects, other (non-testing) techniques utilized in QC include\n                    formal methods like model checking and proof of correctness, as well as\n                    simulation and prototyping\n                 d) Is not correct. QA concentrates on process improvement and\n                    implementation, using a preventive approach to avoid errors and\n                    defects, while testing is a form of QC that is used to detect defects",
    "lo": "FL-1.2.2",
    "kLevel": "K1"
  },
  {
    "set": "B",
    "number": "3",
    "id": "B-3",
    "points": "1 Point",
    "stem": "One of the ‘principles of testing’ states that exhaustive testing is impossible. Which of the following\nis an example of addressing this principle in practice?",
    "options": [
      {
        "id": "a",
        "text": "Creating test cases that cover every possible specified output"
      },
      {
        "id": "b",
        "text": "Documenting all possible test input variations and prioritizing these based on importance"
      },
      {
        "id": "c",
        "text": "Starting testing as early as possible with reviews and other static testing approaches"
      },
      {
        "id": "d",
        "text": "Using equivalence partitioning and boundary value analysis to generate test cases"
      }
    ],
    "selectCount": 1,
    "correct": [
      "d"
    ],
    "explanation": "The ‘exhaustive testing is impossible’ principle is concerned with the fact\n                                         that it is not feasible to test every possible variation of inputs in all different\n                                         circumstances, except in trivial cases. Instead, testing utilizes test\n                                         techniques, test case prioritization, and risk-based testing to sample from\n                                         the set of possibilities and focus test efforts.\n\n                                         a) Is not correct. The principle states that it is not feasible to test everything\n                                            except in trivial cases. Testing everything would require testing every\n                                            possible variation of inputs in all different circumstances, which is\n                                            generally infeasible as there will be a practically infinite number of\n                                            possibilities. Testing every possible expected result will not address this\n                                            problem as the relationship between inputs and expected results can be\n                                            different for each test object. Sometimes there may be a practically\n                                            infinite number of possible expected results (e.g., when there are\n                                            several variables representing real numbers), whereas at other times\n                                            there may be just two expected results, such as with a single variable\n                                            that can be either true or false\n                                         b) Is not correct. The principle states that it is not feasible to test every\n                                            possible variation of inputs in all different circumstances. This is\n                                            because for non-trivial systems there is a practically infinite number.\n                                            Therefore, in practice, documenting all possible input variations would\n                                            be impractical as it would take an infinite length of time\n                                         c) Is not correct. Starting testing as early as possible with reviews and\n                                            other static testing approaches will not address the problem of there\n                                            being too many possible test cases. The ‘early testing saves time and\n                                            money’ principle is concerned with fixing defects early on to prevent the\n                                            occurrence of subsequent defects in derived work products, thereby\n                                            reducing costs and the likelihood of failures\n                                         d) Is correct. The use of equivalence partitioning and boundary value\n                                            analysis to generate test cases is one way to address the principle as\n                                            these test techniques provide a systematic way to derive a finite subset\n                                            of all possible test cases\n\nQuestion Correct                            Explanation / Rationale                               Learning    K-Level   Number\nNumber Answer                                                                                     Objective                of\n  (#)                                                                                               (LO)                 Points",
    "lo": "FL-1.3.1",
    "kLevel": "K2"
  },
  {
    "set": "B",
    "number": "4",
    "id": "B-4",
    "points": "1 Point",
    "stem": "Which test activity involves working with test data requirements, test conditions, test environment\nrequirements and test cases?",
    "options": [
      {
        "id": "a",
        "text": "Test design"
      },
      {
        "id": "b",
        "text": "Test execution"
      },
      {
        "id": "c",
        "text": "Test analysis"
      },
      {
        "id": "d",
        "text": "Test implementation"
      }
    ],
    "selectCount": 1,
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. Test design involves using test conditions to create test\n                    cases and other necessary testware, such as test data requirements\n                    and test charters for exploratory testing. Test environment requirements\n                    are also specified, including the necessary infrastructure and tools\n                 b) Is not correct. Test execution involves executing test cases (as part of\n                    test procedures), however it does not directly cover the other testware\n                    mentioned in the question, such as test data requirements, test\n                    environment requirements and test conditions\n                 c) Is not correct. Test analysis is used to identify the features that require\n                    testing. The test basis is analyzed and defined as test conditions, which\n                    are then prioritized along with related risks. While this activity involves\n                    working with test conditions, it does not cover the other testware\n                    mentioned in the question, such as test data requirements, test\n                    environment requirements and test cases\n                 d) Is not correct. Test implementation includes the generation of test\n                    procedures, such as manual and automated test scripts, which are\n                    created from test cases and may be assembled into test suites. Test\n                    procedures are prioritized and arranged in a test execution schedule.\n                    Test data is created, and the test environment built, and its set up\n                    verified. While this activity involves explicitly working with test cases,\n                    and may use test data requirements and test environment requirements\n                    to create test data and the test environment, it does not cover test\n                    conditions\n\nQuestion Correct                            Explanation / Rationale                               Learning    K-Level   Number\nNumber Answer                                                                                     Objective                of\n  (#)                                                                                               (LO)                 Points",
    "lo": "FL-1.4.1",
    "kLevel": "K2"
  },
  {
    "set": "B",
    "number": "5",
    "id": "B-5",
    "points": "1 Point",
    "stem": "Which of the following is MOST likely to impact how testing is performed for a given test object?",
    "options": [
      {
        "id": "a",
        "text": "The average level of experience of the organization’s marketing team"
      },
      {
        "id": "b",
        "text": "The knowledge of users that a new system is being developed for them"
      },
      {
        "id": "c",
        "text": "The number of years’ experience of the members of the test team"
      },
      {
        "id": "d",
        "text": "The end user’s organizational structure for a commercial music streaming application"
      }
    ],
    "selectCount": 1,
    "correct": [
      "c"
    ],
    "explanation": "a) Is not correct. The organization’s marketing team is unlikely to perform\n                    much testing (although in some organizations they may be involved with\n                    acceptance testing), so their average level of experience (most of which\n                    would be in marketing) is not likely to impact how testing is performed\n                    for a given test object\n                 b) Is not correct. The level of knowledge of users that a new system is\n                    being built for them is unlikely to affect how testing is performed. Any\n                    user involvement that could affect how testing is performed is more\n                    likely to be as a result of decisions made by the testers, customer and\n                    project manager\n                 c) Is correct. The number of years’ experience of the members of the\n                    performance efficiency testing team will help to determine the\n                    capabilities and knowledge (e.g., of different tools and defect types) that\n                    the team members will apply when they are testing\n                 d) Is not correct. The organizational structure of the different end users\n                    (who may be varied) will change between users. So, it may not even be\n                    known when the application is being tested, and the end user’s\n                    organizational structure can thus have little effect on how the testing is\n                    performed\n\nQuestion Correct                             Explanation / Rationale                             Learning    K-Level   Number\nNumber Answer                                                                                    Objective                of\n  (#)                                                                                              (LO)                 Points",
    "lo": "FL-1.4.2",
    "kLevel": "K2"
  },
  {
    "set": "B",
    "number": "6",
    "id": "B-6",
    "points": "1 Point",
    "stem": "Which of the following statements is a CORRECT example of the value of traceability?",
    "options": [
      {
        "id": "a",
        "text": "Traceability between the mitigated risks and test cases that passed provides a means of determining the level of residual risk"
      },
      {
        "id": "b",
        "text": "Traceability between user requirements and test results provides a means of measuring project progress against business goals"
      },
      {
        "id": "c",
        "text": "Traceability between testers and test cases that failed provides a means of determining the skill level of the testers"
      },
      {
        "id": "d",
        "text": "Traceability between the identified risks and written test conditions provides a means of determining which risks are worth testing"
      }
    ],
    "selectCount": 1,
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. Traceability between the mitigated risks and test cases\n                    that passed provides little information, because to be mitigated (by\n                    testing) the risks would need to have a corresponding test case that\n                    passed. To be able to assess residual risk, traceability between all risks\n                    and test results needs to be available, so that the risks that do not have\n                    a corresponding passing test can be identified as the residual risks\n                 b) Is correct. Traceability between user requirements and test results\n                    provides an indication of which user requirements have been tested and\n                    so provides a means of measuring project progress (in the context of\n                    testing) against business goals\n                 c) Is not correct. It is not clear that test cases that failed provide an\n                    indication of tester’s skills any more than test cases that passed. It\n                    would partly depend on the test objective (e.g., building confidence or\n                    causing failures). Also, such measurement of testers based on test\n                    cases that passed and failed can be counter-productive as it could\n                    cause the testers to optimize their testing based on that metric rather\n                    than the test objective\n                 d) Is not correct. Traceability between the identified risks and written test\n                    conditions provides a means of determining which further test conditions\n                    need to be written. Determining which risks are worth testing is part of\n                    risk management, and risk mitigation in particular\n\nQuestion Correct                              Explanation / Rationale                            Learning    K-Level   Number\nNumber Answer                                                                                    Objective                of\n  (#)                                                                                              (LO)                 Points",
    "lo": "FL-1.4.4",
    "kLevel": "K2"
  },
  {
    "set": "B",
    "number": "7",
    "id": "B-7",
    "points": "1 Point",
    "stem": "Which of the following is MOST likely to be an example of a tester using a generic skill when\ntesting?",
    "options": [
      {
        "id": "a",
        "text": "The tester’s deep knowledge of a variety of computer games meant that they got on well with one of the developers who was also into gaming"
      },
      {
        "id": "b",
        "text": "The tester was a former pilot and was better able to understand the acceptance criteria for the helicopter control system"
      },
      {
        "id": "c",
        "text": "The tester previously worked as a programmer and used their skills in this area to better communicate with the business analysts"
      },
      {
        "id": "d",
        "text": "The tester was very careful not to make mistakes when they methodically generated test cases prior to starting their exploratory testing session"
      }
    ],
    "selectCount": 1,
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. Strong communication skills, active listening, and\n                    teamwork abilities enable a tester to interact effectively with all\n                    stakeholders, however a deep knowledge of a variety of computer\n                    games that allowed them to get on well with one developer is not an\n                    example of a generic skill useful to testers\n                 b) Is correct. Domain knowledge that can be used to understand and\n                    communicate with end-users and business representatives is one of the\n                    generic skills required by testers. A tester with experience as a pilot\n                    would make them better able to appreciate the acceptance criteria for\n                    the helicopter control system\n                 c) Is not correct. Although programming skills could be considered as\n                    technical knowledge which can increase efficiency when utilizing some\n                    test tools, it is unlikely that these skills would improve their\n                    communication with business analysts\n                 d) Is not correct. Although thoroughness, attention to detail, curiosity, and\n                    a methodical approach to identifying hard-to-find defects are all useful\n                    generic skills for testers, it is doubtful they would be generating test\n                    cases prior to starting exploratory testing. This is because one of the\n                    main tenets of exploratory testing is that the test cases are generated\n                    during the testing, not scripted in advance\n\nQuestion Correct                            Explanation / Rationale                             Learning    K-Level   Number\nNumber Answer                                                                                   Objective                of\n  (#)                                                                                             (LO)                 Points",
    "lo": "FL-1.5.1",
    "kLevel": "K2"
  },
  {
    "set": "B",
    "number": "8",
    "id": "B-8",
    "points": "1 Point",
    "stem": "Which of the following is an advantage of the whole-team approach?",
    "options": [
      {
        "id": "a",
        "text": "It allows team members to take on any role at any time"
      },
      {
        "id": "b",
        "text": "It only needs a single team to support the complete development project"
      },
      {
        "id": "c",
        "text": "It embeds business representatives alongside developers in the same team"
      },
      {
        "id": "d",
        "text": "It generates a team synergy that benefits the entire project"
      }
    ],
    "selectCount": 1,
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. The whole-team approach allows any team member with\n                    the requisite skills and knowledge to undertake any task, however that\n                    does not mean that team members can take on any role at any time.\n                    Typically, they only take on roles in which they are competent, and there\n                    is no suggestion that every team member can do every role\n                 b) Is not correct. The whole-team approach applies to how a single team\n                    (typically in Agile software development) works; it does not cover how\n                    multiple teams are supposed to work on larger projects, and it does not\n                    suggest that only one ‘whole’ team is needed for a complete project\n                 c) Is not correct. The whole-team approach does not expect every team\n                    member to be involved in every important decision. For instance, there\n                    is no need for the business representative (i.e., the Product Owner) to\n                    be involved in every technical decision that does not affect the business\n                    outcome and implementing such an approach would unnecessarily slow\n                    down the team’s progress\n                 d) Is correct. By leveraging the diverse skill sets of each team member\n                    most effectively, the whole-team approach fosters superior team\n                    dynamics, promotes robust communication and collaboration, and\n                    generates a team synergy that benefits the entire project\n\nQuestion Correct                             Explanation / Rationale                                Learning    K-Level   Number\nNumber Answer                                                                                       Objective                of\n  (#)                                                                                                 (LO)                 Points",
    "lo": "FL-1.5.2",
    "kLevel": "K1"
  },
  {
    "set": "B",
    "number": "9",
    "id": "B-9",
    "points": "1 Point",
    "stem": "Which of the following statements about the chosen software development lifecycle is CORRECT?",
    "options": [
      {
        "id": "a",
        "text": "If agile software development is used, automation of system tests replaces the need for regression testing"
      },
      {
        "id": "b",
        "text": "If a sequential development model is used, then the dynamic testing is typically restricted to later in the lifecycle"
      },
      {
        "id": "c",
        "text": "If an iterative development model is used, then component testing is typically performed manually by developers"
      },
      {
        "id": "d",
        "text": "If an incremental development model is used, then static testing is done in early increments and dynamic testing in later increments"
      }
    ],
    "selectCount": 1,
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. In agile software development, deliverables are produced\n                    in each iteration, and the frequent delivery of increments necessitates\n                    extensive regression testing. Although some (or all) of this regression\n                    testing may be automated, the regression testing (automated or not)\n                    cannot be replaced by automation of system tests\n                 b) Is correct. If a sequential development model is used, then early in the\n                    software development lifecycle no code is available for execution, and\n                    so during this time static testing (e.g., reviews) is performed. Later in the\n                    lifecycle, when code is available for execution, dynamic testing is\n                    possible. Note, however, that preparation for dynamic testing will often\n                    occur early in any software development lifecycle\n                 c) Is not correct. If an iterative development model, like agile software\n                    development, is used, then component tests may well be used for\n                    regression testing for each iteration. In which case, there is a strong\n                    argument for automating these component tests, which will have to be\n                    run frequently, and there is unlikely to be a strong argument for\n                    developers performing these component tests manually\n                 d) Is not correct. In most incremental development models, deliverables\n                    are produced in each increment, requiring both static testing and\n                    dynamic testing at all test levels for each increment delivered\n\nQuestion Correct                            Explanation / Rationale                              Learning    K-Level   Number\nNumber Answer                                                                                    Objective                of\n  (#)                                                                                              (LO)                 Points",
    "lo": "FL-2.1.1",
    "kLevel": "K2"
  },
  {
    "set": "B",
    "number": "10",
    "id": "B-10",
    "points": "1 Point",
    "stem": "Which of the following is a good testing practice that applies to all software development lifecycles?",
    "options": [
      {
        "id": "a",
        "text": "Testers should review work products as part of the next development phase"
      },
      {
        "id": "b",
        "text": "Testers should review work products as soon as drafts are available"
      },
      {
        "id": "c",
        "text": "Testers should review work products before test analysis and test design begin"
      },
      {
        "id": "d",
        "text": "Testers should review work products immediately after they are published"
      }
    ],
    "selectCount": 1,
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. Testers should review work products as soon as drafts\n                    are available to enable early testing as part of a shift-left approach. If\n                    they waited until the next development phase, then unnecessary\n                    development (and test) work could be started on unreviewed, flawed\n                    work products\n                 b) Is correct. Testers should review work products as soon as drafts are\n                    available to enable early testing as part of a shift-left approach\n                 c) Is not correct. Testers typically review work products that form the test\n                    basis as part of test analysis, not before test analysis and test design\n                 d) Is not correct. Testers should review work products as soon as drafts\n                    are available to enable early testing as part of the shift-left approach.\n                    Waiting until they are published means that any defects that could be\n                    found by tester’s review will be in the published document",
    "lo": "FL-2.1.2",
    "kLevel": "K1"
  },
  {
    "set": "B",
    "number": "11",
    "id": "B-11",
    "points": "1 Point",
    "stem": "Which of the following is an example of a test-first approach to development?",
    "options": [
      {
        "id": "a",
        "text": "Test-Driven Development"
      },
      {
        "id": "b",
        "text": "Coverage-Driven Development"
      },
      {
        "id": "c",
        "text": "Quality-Driven Development"
      },
      {
        "id": "d",
        "text": "Feature-Driven Development"
      }
    ],
    "selectCount": 1,
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. Test-Driven Development (TDD) is a well-known example of\n                    a test-first approach to development\n                 b) Is not correct. Coverage-Driven Development is not a correct example\n                    of a test-first approach to development\n                 c) Is not correct. Quality-Driven Development is not a correct example of a\n                    test-first approach to development\n                 d) Is not correct. Feature-Driven Development is not an example of a test-\n                    first approach to development, but is, instead, an agile software\n                    development methodology based around delivering features (as\n                    opposed to user stories in Scrum)\n\nQuestion Correct                           Explanation / Rationale                              Learning    K-Level   Number\nNumber Answer                                                                                   Objective                of\n  (#)                                                                                             (LO)                 Points",
    "lo": "FL-2.1.3",
    "kLevel": "K1"
  },
  {
    "set": "B",
    "number": "12",
    "id": "B-12",
    "points": "1 Point",
    "stem": "Which of the following statements about DevOps is CORRECT?",
    "options": [
      {
        "id": "a",
        "text": "To speed up releases, continuous integration is used to encourage developers to submit code quickly without the need to complete component testing"
      },
      {
        "id": "b",
        "text": "To be able to update and release systems on a more frequent basis, many automated regression tests are required to reduce the risk of regression"
      },
      {
        "id": "c",
        "text": "To treat both developers and operations equally, the testers will allocate more effort to release testing by operations using a shift-right approach"
      },
      {
        "id": "d",
        "text": "To create increased synergy between testers, developers and operations, the testing must become fully automated with no manual testing"
      }
    ],
    "selectCount": 1,
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. DevOps enhances testing in several ways, such as by\n                    providing fast feedback on code quality, automated regression testing\n                    that minimizes regression risk, and promoting a shift-left approach with\n                    high-quality code submission and component tests. This is largely\n                    provided through continuous integration, where the developers submit\n                    component (unit) tests with their new code, which must pass for the\n                    code to be admitted to the build. Therefore, developers do need to\n                    complete component testing\n                 b) Is correct. DevOps enhances testing in several ways, such as by\n                    providing fast feedback on code quality, automated regression testing\n                    that minimizes regression risk, and promoting a shift-left approach with\n                    high-quality code submission and component tests\n                 c) Is not correct. DevOps enhances testing in several ways, such as by\n                    providing fast feedback on code quality, automated regression testing\n                    that minimizes regression risk, and promoting a shift-left approach with\n                    high-quality code submission and component tests. Testers do not\n                    attempt to treat developers and operations equally by spending more\n                    time on release testing, although a shift-right approach to testing\n                    (testing in production) may well be used\n                 d) Is not correct. Automated processes like continuous\n                    integration/continuous delivery (CI/CD) in DevOps facilitate stable test\n                    environments and reduce the need for manual testing, however, there is\n                    a risk of overlooking the importance of manual testing, especially from a\n                    user's perspective\n\nQuestion Correct                             Explanation / Rationale                             Learning    K-Level   Number\nNumber Answer                                                                                    Objective                of\n  (#)                                                                                              (LO)                 Points",
    "lo": "FL-2.1.4",
    "kLevel": "K2"
  },
  {
    "set": "B",
    "number": "13",
    "id": "B-13",
    "points": "1 Point",
    "stem": "Which of the following is MOST likely to be performed as part of system testing?",
    "options": [
      {
        "id": "a",
        "text": "Security testing of a credit management system by an independent test team"
      },
      {
        "id": "b",
        "text": "Testing the interface of a currency exchange system with an external banking system"
      },
      {
        "id": "c",
        "text": "Beta testing of a remote learning system by courseware developers"
      },
      {
        "id": "d",
        "text": "Testing interactions between the user interface and database of a human resources system"
      }
    ],
    "selectCount": 1,
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. System testing examines the behavior and capabilities of the\n                    complete system and covers non-functional testing of quality\n                    characteristics, which includes security testing. This type of testing is\n                    often performed by an independent test team based on system\n                    specifications\n                 b) Is not correct. System integration testing examines the interfaces with\n                    other systems and external services\n                 c) Is not correct. Beta testing is a type of acceptance testing performed at\n                    an external site by roles outside the development organization\n                 d) Is not correct. Component integration testing involves testing the\n                    (interfaces and) interactions between components of a system, such as\n                    the user interface and database",
    "lo": "FL-2.2.1",
    "kLevel": "K2"
  },
  {
    "set": "B",
    "number": "14",
    "id": "B-14",
    "points": "1 Point",
    "stem": "Which of the following statements is CORRECT?",
    "options": [
      {
        "id": "a",
        "text": "Regression tests increase in number as the project progresses, whereas the number of confirmation tests decreases as the project progresses"
      },
      {
        "id": "b",
        "text": "Regression tests are created and run when the test object is fixed, whereas confirmation tests are run whenever the test object is enhanced"
      },
      {
        "id": "c",
        "text": "Regression testing is concerned with checking that the operational environment remains unchanged, whereas confirmation testing is concerned with testing changes to the test object"
      },
      {
        "id": "d",
        "text": "Regression testing is concerned with adverse effects in unchanged code, whereas confirmation testing is concerned with testing changed code"
      }
    ],
    "selectCount": 1,
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. Regression tests increase in number as the project\n                    progresses, as new regression tests are typically required as changes\n                    are made to the system. Similarly, the number of confirmation tests also\n                    typically increases as the project progresses as new confirmation tests\n                    are needed for each fix made to a system\n                 b) Is not correct. It is the other way round. Confirmation tests are created\n                    and run when the test object is fixed, and regression tests are (ideally)\n                    run whenever the test object is enhanced (changed)\n                 c) Is not correct. Confirmation testing verifies that a defect has been fixed\n                    correctly and so is concerned with testing changes to the test object.\n                    However, regression testing ensures that changes (including changes to\n                    the operational environment) do not have negative effects on\n                    unchanged software and so does not check that the operational\n                    environment remains unchanged\n                 d) Is correct. Regression testing ensures that changes do not have\n                    negative effects on unchanged software. Confirmation testing verifies\n                    that a defect has been fixed – and so is concerned with changed code\n\nQuestion Correct                            Explanation / Rationale                                Learning    K-Level   Number\nNumber Answer                                                                                      Objective                of\n  (#)                                                                                                (LO)                 Points",
    "lo": "FL-2.2.3",
    "kLevel": "K2"
  },
  {
    "set": "B",
    "number": "15",
    "id": "B-15",
    "points": "1 Point",
    "stem": "Which of the following is an example of a defect that can be found by static testing but NOT by\ndynamic testing?",
    "options": [
      {
        "id": "a",
        "text": "Lack of usability provided through the user interface"
      },
      {
        "id": "b",
        "text": "Code with no path that reaches it"
      },
      {
        "id": "c",
        "text": "Poor response times for most of the expected users"
      },
      {
        "id": "d",
        "text": "Required features that are not implemented in the code"
      }
    ],
    "selectCount": 1,
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. A lack of usability provided through the user interface can\n                    be detected through a review using a suitable checklist, but the lack of\n                    usability can also be identified by getting several typical users to\n                    dynamically test the user interface and provide feedback on its usability\n                 b) Is correct. A code review can detect code that cannot be reached by\n                    any path, however dynamic tests can only exercise reachable code and\n                    cannot determine that code cannot be reached without running every\n                    possible combination of inputs and input states, which is impractical for\n                    real code\n                 c) Is not correct. Poor response times for most of the expected users are\n                    difficult to determine without executing the code (i.e., by static testing),\n                    so in this situation dynamic testing could find a defect, but static testing\n                    is unlikely to find it\n                 d) Is not correct. A review of the code by someone who is aware of the\n                    required features could detect that the required features had not been\n                    implemented in the code, and dynamic testing could also be used to\n                    determine that these required features had not been implemented\n\nQuestion Correct                           Explanation / Rationale                             Learning    K-Level   Number\nNumber Answer                                                                                  Objective                of\n  (#)                                                                                            (LO)                 Points",
    "lo": "FL-3.1.3",
    "kLevel": "K2"
  },
  {
    "set": "B",
    "number": "16",
    "id": "B-16",
    "points": "1 Point",
    "stem": "Which of the following is a benefit of early and frequent stakeholder feedback?",
    "options": [
      {
        "id": "a",
        "text": "Managers are aware of which developers are less productive"
      },
      {
        "id": "b",
        "text": "It allows project managers to prioritize their stakeholder interactions"
      },
      {
        "id": "c",
        "text": "It facilitates early communication of potential quality issues"
      },
      {
        "id": "d",
        "text": "End users better understand why the delivery of the work product is delayed"
      }
    ],
    "selectCount": 1,
    "correct": [
      "c"
    ],
    "explanation": "a) Is not correct. The feedback is from stakeholders (e.g., business\n                    representatives and end users), not from developers, so this feedback is\n                    not likely to inform managers which developers are more or less\n                    productive\n                 b) Is not correct. Early and frequent feedback from stakeholders is not\n                    used by project managers to prioritize how they interact with the\n                    different stakeholders\n                 c) Is correct. Obtaining feedback from stakeholders early and often in the\n                    software development process can be highly beneficial as it facilitates\n                    early communication of potential quality issues, can prevent\n                    misunderstandings about requirements, and ensures that any changes\n                    in stakeholder requirements are understood and implemented sooner\n                 d) Is not correct. Early and frequent feedback can prevent the\n                    development of a product that does not meet stakeholder needs, and\n                    results in costly rework and missed deadlines, so, ideally there should\n                    be no delay. Also, the feedback is from stakeholders (not to them),\n                    which includes the end users, so the end users providing feedback will\n                    not aid the end users’ understanding\n\nQuestion Correct                           Explanation / Rationale                               Learning    K-Level   Number\nNumber Answer                                                                                    Objective                of\n  (#)                                                                                              (LO)                 Points",
    "lo": "FL-3.2.1",
    "kLevel": "K1"
  },
  {
    "set": "B",
    "number": "17",
    "id": "B-17",
    "points": "1 Point",
    "stem": "Given the following task descriptions:\n        1. The quality characteristics to be evaluated and the exit criteria are selected\n        2. Everyone has access to the work product\n        3. Anomalies are identified in the work product\n        4. Anomalies are discussed\n\nAnd the following review activities\n       A. Individual review\n       B. Review initiation\n       C. Planning\n       D. Communication and analysis\n\nWhich of the following BEST matches the task descriptions and activities?",
    "options": [
      {
        "id": "a",
        "text": "1B, 2C, 3D, 4A"
      },
      {
        "id": "b",
        "text": "1B, 2D, 3C, 4A"
      },
      {
        "id": "c",
        "text": "1C, 2A, 3B, 4D"
      },
      {
        "id": "d",
        "text": "1C, 2B, 3A, 4D"
      }
    ],
    "selectCount": 1,
    "correct": [
      "d"
    ],
    "explanation": "Considering each of the listed task descriptions:\n                      1. The quality characteristics to be evaluated and the exit criteria are\n                          selected - (Planning (C): Defining the review scope, purpose,\n                          work product to be reviewed, quality characteristics to be\n                          evaluated, areas of focus, exit criteria, supporting information\n                          such as standards, effort, and timeframes.)\n                      2. Everyone has access to the work product - (Review initiation (B):\n                          Ensuring all participants have access to the work product and\n                          necessary resources, and clarifying their roles and\n                          responsibilities.)\n                      3. Anomalies are identified in the work product - (Individual review\n                          (A): Evaluating the work product's quality, identifying and logging\n                          anomalies, recommendations, and questions using review\n                          techniques like checklist-based reviewing and scenario-based\n                          reviewing.)\n                      4. Anomalies are analyzed and discussed - (Communication and\n                          analysis (D): Analyzing and discussing each anomaly,\n                          determining its status, ownership, and required actions, and\n                          making review decisions, normally in a meeting. This could\n                          include determining the need for a follow-up review.)\n\n                                         Thus:\n                                         a) Is not correct\n                                         b) Is not correct\n                                         c) Is not correct\n                                         d) Is correct. The correct match is: 1C, 2B, 3A, 4D\n\nQuestion Correct                           Explanation / Rationale                             Learning    K-Level   Number\nNumber Answer                                                                                  Objective                of\n  (#)                                                                                            (LO)                 Points",
    "lo": "FL-3.2.2",
    "kLevel": "K2"
  },
  {
    "set": "B",
    "number": "18",
    "id": "B-18",
    "points": "1 Point",
    "stem": "Given the following roles in reviews:\n        1. Scribe\n        2. Review leader\n        3. Facilitator\n        4. Manager\n\nAnd the following responsibilities in reviews:\n       A. Ensures the effective running of review meetings and the setting up a safe review\n            environment\n       B. Records review information, such as decisions and new anomalies found during the\n            review meeting\n       C. Decides what is to be reviewed and provides resources, such as staff and time for the\n            review\n       D. Takes overall responsibility for the review such as organizing when and where the\n            review will take place\n\nWhich of the following BEST matches the roles and responsibilities?",
    "options": [
      {
        "id": "a",
        "text": "1A, 2B, 3D, 4C"
      },
      {
        "id": "b",
        "text": "1A, 2C, 3B, 4D"
      },
      {
        "id": "c",
        "text": "1B, 2D, 3A, 4C"
      },
      {
        "id": "d",
        "text": "1B, 2D, 3C, 4A"
      }
    ],
    "selectCount": 1,
    "correct": [
      "c"
    ],
    "explanation": "Considering each of the listed roles:\n                      1. Scribe (or Recorder) - responsible for gathering feedback from\n                          reviewers and documenting review information, such as decisions\n                          made, and any new anomalies identified during the review\n                          meeting. (Records review information, such as decisions and new\n                          anomalies found during the review meeting - B)\n                      2. Review Leader - responsible for overseeing the review process,\n                          such as selecting the review team members, scheduling review\n                          meetings, and ensuring that the review is completed successfully.\n                          (Takes overall responsibility for the review such as organizing\n                          when and where the review will take place - D)\n                      3. Facilitator (or Moderator) - responsible for ensuring that the\n                          review meetings run effectively, including managing time,\n                          mediating discussions, and creating a safe environment where\n                          everyone can voice their opinions freely. (Ensures the effective\n                          running of review meetings and the setting up of a safe review\n                          environment - A)\n                      4. Manager - responsible for deciding what needs to be reviewed\n                          and allocating resources, such as staff and time, for the review.\n                          (Decides what is to be reviewed and provides resources, such as\n                          staff and time for the review - C)\n\n                                         Thus:\n                                         a) Is not correct\n                                         b) Is not correct\n                                         c) Is correct. The correct match is: 1B, 2D, 3A, 4C\n                                         d) Is not correct\n\nQuestion Correct                             Explanation / Rationale                              Learning    K-Level   Number\nNumber Answer                                                                                     Objective                of\n  (#)                                                                                               (LO)                 Points",
    "lo": "FL-3.2.3",
    "kLevel": "K1"
  },
  {
    "set": "B",
    "number": "19",
    "id": "B-19",
    "points": "1 Point",
    "stem": "Which of the following statements BEST describes the difference between decision table testing\nand branch testing?",
    "options": [
      {
        "id": "a",
        "text": "In decision table testing, the test cases are derived from the decision statements in the code. In branch testing, the test cases are derived from knowledge of the control flow of the test object."
      },
      {
        "id": "b",
        "text": "In decision table testing, the test cases are derived from the specification that describes the business logic. In branch testing the test cases are based on anticipation of potential defects in the source code."
      },
      {
        "id": "c",
        "text": "In decision table testing, the test cases are derived from knowledge of the control flow of the test object. In branch testing, test cases are derived from the specification that describes the business logic."
      },
      {
        "id": "d",
        "text": "In decision table testing, the test cases are independent of how the software is implemented. In branch testing, test cases can be created only after the design or implementation of the code."
      }
    ],
    "selectCount": 1,
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. Decision table testing is a black-box test technique, not a\n                    white-box test technique – the test cases are not based on the decisions\n                    in the source code. In branch testing, the test cases are derived from\n                    knowledge of the control flow of the test object\n                 b) Is not correct. Anticipation of potential defects is used in error guessing\n                    (an experience-based test technique), not in branch testing (a white-box\n                    test technique). In decision table testing, the test cases are derived from\n                    the specification that describes the business logic\n                 c) Is not correct. If a test case is based on the knowledge of the control\n                    flow of the test object, it is a white-box test technique. Decision table\n                    testing is typically based on an analysis of business logic, so it is a\n                    black-box test technique. In branch testing, test cases are not derived\n                    from the specification – this would make it a black-box test technique.\n                    Branch testing is a white-box test technique, where test cases are\n                    derived based on the source code structure\n                 d) Is correct. Decision table testing is a black-box test technique, so it is\n                    based on an analysis of the specified behavior of the test object without\n                    reference to its internal structure. Therefore, the test cases are\n                    independent of how the software is implemented. Branch testing is a\n                    white-box test technique, so test cases are based on an analysis of the\n                    test object’s internal structure and processing. As the test cases are\n                    dependent on how the software is designed and coded, they can only\n                    be created after the design or implementation of the test object\n\nQuestion Correct                           Explanation / Rationale                                Learning    K-Level   Number\nNumber Answer                                                                                     Objective                of\n  (#)                                                                                               (LO)                 Points",
    "lo": "FL-4.1.1",
    "kLevel": "K2"
  },
  {
    "set": "B",
    "number": "20",
    "id": "B-20",
    "points": "1 Point",
    "stem": "Customers of the TestWash car wash chain have cards with a record of the number of washes\nthey have bought so far. The initial value is 0. After entering the car wash, the system increases\nthe number on the card by one. This value represents the number of the current wash. Based on\nthis number the system decides what discount the customer is entitled to.\n\nFor every tenth wash the system gives a 10% discount, and for every twentieth wash, the system\ngives a further 40% discount (i.e., a 50% discount in total).\n\nWhich of the following sets of input data (understood as the numbers of the current wash) achieves\nthe highest equivalence partition coverage?",
    "options": [
      {
        "id": "a",
        "text": "19, 20, 30"
      },
      {
        "id": "b",
        "text": "11, 12, 20"
      },
      {
        "id": "c",
        "text": "1, 10, 50"
      },
      {
        "id": "d",
        "text": "10, 29, 30, 31"
      }
    ],
    "selectCount": 1,
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. 19 covers the “no discount” partition, 20 covers the “50%\n                    discount” partition, and 30 covers the “10% discount” partition. These\n                    three values cover all three of the valid equivalence partitions\n                 b) Is not correct. 11 and 12 cover the “no discount” partition, while 20\n                    covers the “50% discount” partition, so covering two of the three valid\n                    equivalence partitions\n                 c) Is not correct. 1 covers the “no discount” partition, while 10 and 50 cover\n                    the “10% discount” partition. The “50% discount” partition is not\n                    covered, so overall two of the three valid equivalence partitions are\n                    covered\n                 d) Is not correct. 29 and 31 cover the “no discount” partition, while 10 and\n                    30 cover the “10% discount” partition. The “50% discount” partition is\n                    not covered, so overall two of the three valid equivalence partitions are\n                    covered\n\nQuestion Correct                         Explanation / Rationale                                                  Learning    K-Level   Number\nNumber Answer                                                                                                     Objective                of\n  (#)                                                                                                               (LO)                 Points",
    "lo": "FL-4.2.1",
    "kLevel": "K3"
  },
  {
    "set": "B",
    "number": "21",
    "id": "B-21",
    "points": "1 Point",
    "stem": "You are testing a form that verifies the correctness of the length of the password given as input.\nThe form accepts a password with the correct length and rejects a password that is too short or too\nlong. The password length is correct if it has between 6 and 12 characters inclusive. Otherwise, it\nis considered incorrect.\n\nAt first, the form is empty (password length = 0). You apply boundary value analysis to the\n“password length” variable.\n\nYour set of test cases achieves 100% 2-value boundary value coverage. The team decided that\ndue to the high risk of this component, test cases should be added to ensure 100% 3-value\nboundary value coverage.\n\nWhich additional password lengths should be tested to achieve this?",
    "options": [
      {
        "id": "a",
        "text": "4, 5, 13, 14"
      },
      {
        "id": "b",
        "text": "7, 11"
      },
      {
        "id": "c",
        "text": "1, 5, 13"
      },
      {
        "id": "d",
        "text": "1, 4, 7, 11, 14"
      }
    ],
    "selectCount": 1,
    "correct": [
      "d"
    ],
    "explanation": "The domain for the password length has three equivalence partitions:\n                      • passwords too short {0, 1, …, 4, 5}\n                      • passwords OK {6, 7, …, 11, 12}\n                      • passwords too long {13, 14, …}\n\n                                         To achieve full coverage for 3-value BVA we need to test the following\n                                         values:\n                                                  0, 1, 4, 5, 6, 7, 11, 12, 13, 14.\n\n                                         Since 2-value BVA is already covered, this means that we have already\n                                         tested the passwords of length:\n                                                   0, 5, 6, 12 and 13.\n\n                                         This means that the additional lengths that need to be covered to move\n                                         from 2-value to 3-value are:\n                                                   1, 4, 7, 11 and 14.\n\n                                         Thus:\n                                         a) Is not correct\n                                         b) Is not correct\n                                         c) Is not correct\n                                         d) Is correct\n\nQuestion Correct                           Explanation / Rationale                            Learning    K-Level   Number\nNumber Answer                                                                                 Objective                of\n  (#)                                                                                           (LO)                 Points",
    "lo": "FL-4.2.2",
    "kLevel": "K3"
  },
  {
    "set": "B",
    "number": "22",
    "id": "B-22",
    "points": "1 Point",
    "stem": "The following decision table contains the rules for determining the risk of atherosclerosis.\n\n                                                Rule 1    Rule 2    Rule 3    Rule 4    Rule 5\n Conditions\n       Cholesterol (mg/dl)                                          125 –     125 –\n                                                  ≤124    ≤ 124                         ≥ 201\n                                                                     200       200\n     Blood pressure (mm\n                                                 ≤ 140    > 140     ≤ 140     > 140       –\n                     Hg)\n Action\n                        Risk level             very low    low     medium      high    very high\n\nYou designed the test cases with the following input data:\n\n                    TC1:            Cholesterol = 125 mg/dl            Blood pressure = 141 mm Hg\n\n                    TC2:            Cholesterol = 200 mg/dl            Blood pressure = 201 mm Hg\n\n                    TC3:            Cholesterol = 124 mg/dl            Blood pressure = 201 mm Hg\n\n                    TC4:            Cholesterol = 109 mg/dl            Blood pressure = 200 mm Hg\n\n                    TC5:            Cholesterol = 201 mg/dl            Blood pressure = 140 mm Hg\n\nWhat is the decision table coverage achieved by these test cases?",
    "options": [
      {
        "id": "a",
        "text": "40%"
      },
      {
        "id": "b",
        "text": "60%"
      },
      {
        "id": "c",
        "text": "80%"
      },
      {
        "id": "d",
        "text": "100%"
      }
    ],
    "selectCount": 1,
    "correct": [
      "b"
    ],
    "explanation": "There are five columns in the decision table. Each test case covers one of\n                 them.\n                           TC1 and TC2 both cover Rule 4\n                           TC3 and TC4 both cover Rule 2\n                           TC5 covers Rule 5\n                 So, these five test cases cover three out of five columns, achieving a\n                 coverage of (3/5)*100% = 60%. Therefore, option b) is the CORRECT\n                 option.\n\n                                         Thus:\n                                         a) Is not correct\n                                         b) Is correct\n                                         c) Is not correct\n                                         d) Is not correct",
    "lo": "FL-4.2.3",
    "kLevel": "K3"
  },
  {
    "set": "B",
    "number": "23",
    "id": "B-23",
    "points": "1 Point",
    "stem": "A storage system can store up to three elements and is modeled by the following state transition\ndiagram. The variable N represents the number of currently stored elements.\n\nWhich of the following test cases, represented as sequences of events, achieves the highest level\nof valid transitions coverage?",
    "options": [
      {
        "id": "a",
        "text": "Add, Remove, Add, Add, Add"
      },
      {
        "id": "b",
        "text": "Add, Add, Add, Add, Remove, Remove"
      },
      {
        "id": "c",
        "text": "Add, Add, Add, Remove, Remove"
      },
      {
        "id": "d",
        "text": "Add, Add, Add, Remove, Add"
      }
    ],
    "selectCount": 1,
    "correct": [
      "c"
    ],
    "explanation": "Let us refer to the transitions with E1, …, E5 as in the picture. The variable\n                                         N denotes the number of elements currently stored. Each “Add” event\n                                         increases it by 1, and each “Remove” event decreases it by 1. Notice, that\n                                         when the “Add” event occurs while being in the NOT FULL state, the state\n                                         changes to FULL only if N=2. If N<2, the system stays in the NOT FULL\n                                         state. If N=0, no “Remove” action is possible. Similarly, if N=3, no “Add”\n                                         action is possible.\n                                                    Test a) can be written as E1, E3, E3, E2, E4 (so covers 4 out of 5\n                                                    valid transitions, achieving 80% valid transitions coverage).\n                                                    Test b) is infeasible, because after the first three “Add” actions the\n                                                    system is in the FULL state and there is no valid transition going\n                                                    from FULL triggered by the “Add” event. After the first three\n                                                    transitions only 60% of valid transitions coverage is achieved.\n                                                    Test c) can be written as E1, E2, E4, E5, E3 (so covers 5 out of 5\n                                                    valid transitions, achieving 100% valid transitions coverage).\n                                                    Test d) can be written as E1, E2, E4, E5, E4 (so covers 4 out of 5\n                                                    valid transitions, achieving 80% valid transitions coverage).\n\n                                         Thus:\n                                         a) Is not correct\n                                         b) Is not correct\n                                         c) Is correct\n                                         d) Is not correct\n\nQuestion Correct                            Explanation / Rationale                               Learning    K-Level   Number\nNumber Answer                                                                                     Objective                of\n  (#)                                                                                               (LO)                 Points",
    "lo": "FL-4.2.4",
    "kLevel": "K3"
  },
  {
    "set": "B",
    "number": "24",
    "id": "B-24",
    "points": "1 Point",
    "stem": "You run two test cases, T1 and T2, on the same code. Test T1 achieved 40% statement coverage\nand test T2 achieved 65% statement coverage.\n\nWhich of the following sentences must be necessarily true?",
    "options": [
      {
        "id": "a",
        "text": "The test suite composed of tests T1 and T2 achieves 105% statement coverage"
      },
      {
        "id": "b",
        "text": "There exists at least one statement that must have been executed by both T1 and T2"
      },
      {
        "id": "c",
        "text": "At least 5% of the statements in the code that was tested are non-executable"
      },
      {
        "id": "d",
        "text": "The test suite composed of tests T1 and T2 achieves full branch coverage"
      }
    ],
    "selectCount": 1,
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. Coverage is always defined as the percentage of the\n                    covered elements. Therefore, it cannot exceed 100%\n                 b) Is correct. If the statements executed by T1 and T2 were disjoint, the\n                    coverage of the test suite {T1, T2} would be 105%, which is impossible\n                    (see answer a). Therefore, at least 5% of executable statements must\n                    have been executed by both T1 and T2\n                 c) Is not correct. Statement coverage does not tell us anything about the\n                    number of non-executable statements in the code\n                 d) Is not correct. Even if a test suite achieves full statement coverage, this\n                    does not imply achieving full branch coverage\n\nQuestion Correct                             Explanation / Rationale                                                  Learning    K-Level   Number\nNumber Answer                                                                                                         Objective                of\n  (#)                                                                                                                   (LO)                 Points",
    "lo": "FL-4.3.1",
    "kLevel": "K2"
  },
  {
    "set": "B",
    "number": "25",
    "id": "B-25",
    "points": "1 Point",
    "stem": "Let the branch coverage metric be defined as BCov = (X / Y) * 100%.\n\nWhat do X and Y represent in this formula?",
    "options": [
      {
        "id": "a",
        "text": "X = number of decision outcomes exercised by the test cases Y = total number of decision outcomes in the code"
      },
      {
        "id": "b",
        "text": "X = number of conditional branches exercised by the test cases Y = total number of branches in the code"
      },
      {
        "id": "c",
        "text": "X = number of branches exercised by the test cases Y = total number of branches in the code"
      },
      {
        "id": "d",
        "text": "X = number of conditional branches exercised by the test cases Y = total number of decision outcomes in the code"
      }
    ],
    "selectCount": 1,
    "correct": [
      "c"
    ],
    "explanation": "Branch testing is a white-box test technique in which the coverage items are\n                 branches. A branch is a transfer of control between two nodes in the control\n                 flow graph, which shows the possible sequences in which source code\n                 statements are executed in the test object. Each transfer of control can be\n                 either unconditional (i.e., straight-line code) or conditional (i.e., a decision\n                 outcome). Coverage is measured as the number of branches exercised by\n                 the test cases divided by the total number of branches, and is expressed as\n                 a percentage.\n\n                                         Thus:\n                                         a) Is not correct. A decision outcome is a conditional branch. For branch\n                                            testing, X counts not only conditional, but also unconditional branches\n                                         b) Is not correct. Branch coverage counts not only conditional, but also\n                                            unconditional branches\n                                         c) Is correct. Branch coverage is measured as the number of branches\n                                            exercised by the test cases divided by the total number of branches,\n                                            and is expressed as a percentage\n                                         d) Is not correct. Both X and Y count only conditional branches and do not\n                                            take into account the unconditional branches\n\nQuestion Correct                                Explanation / Rationale                                                 Learning    K-Level   Number\nNumber Answer                                                                                                           Objective                of\n  (#)                                                                                                                     (LO)                 Points",
    "lo": "FL-4.3.2",
    "kLevel": "K2"
  },
  {
    "set": "B",
    "number": "26",
    "id": "B-26",
    "points": "1 Point",
    "stem": "Which TWO of the following statements provide the BEST rationale for using exploratory testing?",
    "options": [
      {
        "id": "a",
        "text": "Testers have not been allocated enough time for test design and test execution"
      },
      {
        "id": "b",
        "text": "The existing test strategy requires that testers use formal, black-box test techniques"
      },
      {
        "id": "c",
        "text": "The specification is written in a formal language that can be processed by a tool"
      },
      {
        "id": "d",
        "text": "Testers are the members of an agile team and have good programming skills"
      },
      {
        "id": "e",
        "text": "Testers are experienced in the business domain and have good analytical skills"
      }
    ],
    "selectCount": 2,
    "correct": [
      "a",
      "e"
    ],
    "explanation": "Exploratory testing is useful when there are few or inadequate\n                 specifications or there is significant time pressure on the testing.\n                 Exploratory testing is also useful to complement other more formal test\n                 techniques. Exploratory testing will be more effective if the tester is\n                 experienced, has domain knowledge and has a high degree of essential\n                 skills, like analytical skills, curiosity and creativeness.\n\n                                         Thus:\n                                         a) Is correct. Exploratory testing is useful when there are few or\n                                            inadequate specifications or there is significant time pressure on the\n                                            testing\n                                         b) Is not correct. Exploratory testing is not a black-box test technique\n                                         c) Is not correct. Exploratory testing is useful when the specifications are\n                                            poorly written\n                                         d) Is not correct. Programming skills have nothing to do with exploratory\n                                            testing in principle\n                                         e) Is correct. Exploratory testing will be more effective if the tester is\n                                            experienced, has domain knowledge and has a high degree of essential\n                                            skills, like analytical skills, curiosity and creativeness\n\nQuestion Correct                             Explanation / Rationale                              Learning    K-Level   Number\nNumber Answer                                                                                     Objective                of\n  (#)                                                                                               (LO)                 Points",
    "lo": "FL-4.4.2",
    "kLevel": "K2"
  },
  {
    "set": "B",
    "number": "27",
    "id": "B-27",
    "points": "1 Point",
    "stem": "Which of the following BEST fits as an element of the checklist used in checklist-based testing?",
    "options": [
      {
        "id": "a",
        "text": "“The developer made an error when implementing the code”"
      },
      {
        "id": "b",
        "text": "“The achieved statement coverage exceeds 85%”"
      },
      {
        "id": "c",
        "text": "“The program works correctly regarding functional and non-functional requirements”"
      },
      {
        "id": "d",
        "text": "“The error messages are written in language that the user can understand”"
      }
    ],
    "selectCount": 1,
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. Checklists should contain test conditions to be verified.\n                    This is an example of an error, not a test condition; even if the tester\n                    was able to deduce some potential test conditions from the examples of\n                    errors, this error description is too general\n                 b) Is not correct. Checklists should not contain items that are better suited\n                    as exit criteria. This is an example of an exit criterion\n                 c) Is not correct. Checklists should not contain items that are too general.\n                    This is a very general item, which practically describes a test objective\n                 d) Is correct. This is an example of a test condition that can be checked by\n                    a human",
    "lo": "FL-4.4.3",
    "kLevel": "K2"
  },
  {
    "set": "B",
    "number": "28",
    "id": "B-28",
    "points": "1 Point",
    "stem": "Consider the following acceptance criteria for a user story written from the perspective of an online\nstore owner.\n\n                    Given that the user is logged in and on the homepage,\n                    When the user clicks on the \"Add Item\" button,\n                    Then the \"Create Item\" form should appear,\n                    And the user should be able to input a name and price for the new item.\nIn what format is this acceptance criteria written?",
    "options": [
      {
        "id": "a",
        "text": "Rule-oriented"
      },
      {
        "id": "b",
        "text": "Scenario-oriented"
      },
      {
        "id": "c",
        "text": "Product-oriented"
      },
      {
        "id": "d",
        "text": "Process-oriented"
      }
    ],
    "selectCount": 1,
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. The rule-oriented format includes formats like bullet point\n                    verification lists or tabulated forms of input-output mappings, explicitly\n                    showing the rules to be followed. Given/When/Then is a scenario-\n                    oriented format because it describes a scenario to be verified\n                 b) Is correct. This is a Given/When/Then format, which is scenario-oriented\n                 c) Is not correct. There is no \"product-oriented\" format of acceptance\n                    criteria\n                 d) Is not correct. There is no \"process-oriented\" format of acceptance\n                    criteria",
    "lo": "FL-4.5.2",
    "kLevel": "K2"
  },
  {
    "set": "B",
    "number": "29",
    "id": "B-29",
    "points": "1 Point",
    "stem": "Your team analyzes the following user story in order to define the acceptance criteria:\n\n                    As a registered customer, I want to be able to view my previous orders on the\n                    company's website, so that I can keep track of my purchases.\n\nWhich of the following test cases will NOT be relevant for this user story?",
    "options": [
      {
        "id": "a",
        "text": "Input: the customer logs into their account on the website and clicks the “see order history” button Expected result: the system shows a list of all the customer’s previous orders, including the date, order number, and total cost"
      },
      {
        "id": "b",
        "text": "Input: the customer clicks on an order from the order list Expected result: the system displays the individual items purchased, along with their prices and quantities"
      },
      {
        "id": "c",
        "text": "Input: the customer clicks “Sort ascending” button on the order history screen Expected result: the system shows the order history sorted by order number in ascending order"
      },
      {
        "id": "d",
        "text": "Input: an unregistered customer registers as a new customer with a valid e-mail address that does not already exist in the customer database Expected result: the system accepts the registration and creates the account"
      }
    ],
    "selectCount": 1,
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. The test case is related to viewing previous orders in the\n                    order history\n                 b) Is not correct. The test case is related to viewing previous orders\n                 c) Is not correct. The test case is related to viewing previous orders in the\n                    order history\n                 d) Is correct. The test case is related to the registration process, which is\n                    not discussed in the user story. The user story is about viewing previous\n                    orders\n\nQuestion Correct                             Explanation / Rationale                            Learning    K-Level   Number\nNumber Answer                                                                                   Objective                of\n  (#)                                                                                             (LO)                 Points",
    "lo": "FL-4.5.3",
    "kLevel": "K3"
  },
  {
    "set": "B",
    "number": "30",
    "id": "B-30",
    "points": "1 Point",
    "stem": "Your team follows the process that uses the DevOps delivery pipeline. The first three steps of this\nprocess are:\n\n                  (1) Code development\n                  (2) Submit code into a version control system and merge it into the “test” branch\n                  (3) Perform component testing for the submitted code\nWhich of the following is BEST suited to be the entry criterion for step (2) of this pipeline?",
    "options": [
      {
        "id": "a",
        "text": "Static analysis returns no high severity warnings for the submitted code"
      },
      {
        "id": "b",
        "text": "System version control reports no conflicts when merging code into the “test” branch"
      },
      {
        "id": "c",
        "text": "Component tests are compiled and ready to be executed"
      },
      {
        "id": "d",
        "text": "Statement coverage is at least 80%"
      }
    ],
    "selectCount": 1,
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. This is something that can (and should) be checked before\n                     the code is submitted to version control\n                 b) Is not correct. This is something that can be checked after step (2) is\n                     performed, because merge conflict reporting can be done after the code\n                     is submitted and merged\n                 c) Is not correct. This fits better as the entry criterion for step (3)\n                 d) Is not correct. This fits better as the exit criterion for step (3)",
    "lo": "FL-5.1.3",
    "kLevel": "K2"
  },
  {
    "set": "B",
    "number": "31",
    "id": "B-31",
    "points": "1 Point",
    "stem": "You want to estimate the test effort for the new project using estimation based on ratios. You\ncalculate the test-to-development effort ratio using averaged data for both development effort and\ntest effort from four historical projects similar to the new one. The table shows this historical data.\n\n                                     Project             Development effort     Test effort\n                                                                ($)                ($)\n                                         P1                   800,000             40,000\n                                         P2                  1,200,000           130,000\n                                         P3                   600,000             70,000\n                                         P4                  1,000,000           120,000\n\nThe estimated development effort for the new project is $800,000. What is your estimate of the test\neffort in this project?",
    "options": [
      {
        "id": "a",
        "text": "$40,000"
      },
      {
        "id": "b",
        "text": "$80,000"
      },
      {
        "id": "c",
        "text": "$81,250"
      },
      {
        "id": "d",
        "text": "$82,500"
      }
    ],
    "selectCount": 1,
    "correct": [
      "b"
    ],
    "explanation": "The average development effort is $900,000 and the average test effort is\n                 $90,000 (calculated from the four projects).\n                 The average test-to-development effort ratio is 1:10 ($90,000 : $900,000),\n                 which means that historically, on average, the test effort is 10% of the\n                 development effort.\n                 So if the development effort is estimated to be $800,000, the estimated test\n                 effort is estimated as:\n                             10% * $800,000 = 0.1 * $800,000 = $80,000.\n\n                                         Thus:\n                                         a) Is not correct\n                                         b) Is correct\n                                         c) Is not correct\n                                         d) Is not correct\n\nQuestion Correct                             Explanation / Rationale                                                      Learning    K-Level   Number\nNumber Answer                                                                                                             Objective                of\n  (#)                                                                                                                       (LO)                 Points",
    "lo": "FL-5.1.4",
    "kLevel": "K3"
  },
  {
    "set": "B",
    "number": "32",
    "id": "B-32",
    "points": "1 Point",
    "stem": "You are testing a web application that allows users to SEARCH for products, VIEW product details,\nADD products to a shopping cart, and place an ORDER.\nYou have prepared the following seven test cases, all of which you want to execute. The tests\nshould be executed in the best order, based on test priority.\n\n                                       Test                                  Priority (1 = higher priority)\n                     TC1               SEARCH for product A                  4\n                     TC2               SEARCH for product B                  4\n                     TC3               VIEW product A details                3\n                     TC4               VIEW product B details                2\n                     TC5               ADD product A to a shopping cart      3\n                     TC6               ADD product B to a shopping cart      1\n                     TC7               place an ORDER                        5\n\nYou also identified the following logical dependencies between test cases:\n           • SEARCH functionality must be tested before VIEW functionality can be tested.\n           • VIEW functionality must be tested before ADD functionality.\n           • ADD functionality must be tested before ORDER functionality.\nWhich test case should be executed as the fourth one?",
    "options": [
      {
        "id": "a",
        "text": "TC3"
      },
      {
        "id": "b",
        "text": "TC1"
      },
      {
        "id": "c",
        "text": "TC7"
      },
      {
        "id": "d",
        "text": "TC2"
      }
    ],
    "selectCount": 1,
    "correct": [
      "b"
    ],
    "explanation": "The logical dependencies mean that for each product you have to run\n                 SEARCH → VIEW → ADD before running ORDER. You can add more\n                 products (using the same flow), before you run ORDER.\n                 Based on this, TC1 or TC2 must be executed first, otherwise no progress\n                 can be made.\n                 The first priority should be given to VIEW and ADD product B, as its test\n                 cases (TC6, TC4) are assigned with higher priority.\n                 So, the first 3 tests to execute are TC2 -> TC4 -> TC6\n\n                                         Now we need to consider whether to run TC7 and then the entire flow for\n                                         product A or run the TCs for product A first. If TC7 has lower priority than\n                                         the other tests, they should be tested first.\n                                         Therefore, the entire flow should be:\n                                         TC2 -> TC4 -> TC6 -> TC1 -> TC3 -> TC5 -> TC7\n\n                                         a) Is not correct. TC1 must be executed before TC3\n                                         b) Is correct\n                                         c) Is not correct. As shown above, TC7 is the last to be executed.\n                                         d) Is not correct. Product B must be executed before product A",
    "lo": "FL-5.1.5",
    "kLevel": "K3"
  },
  {
    "set": "B",
    "number": "33",
    "id": "B-33",
    "points": "1 Point",
    "stem": "According to the testing quadrants model, which of the following falls into quadrant Q1 (“technology\nfacing” and “support the team”)?",
    "options": [
      {
        "id": "a",
        "text": "Usability testing"
      },
      {
        "id": "b",
        "text": "Functional testing"
      },
      {
        "id": "c",
        "text": "User acceptance testing"
      },
      {
        "id": "d",
        "text": "Component integration testing"
      }
    ],
    "selectCount": 1,
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. Usability testing is business facing testing that critiques\n                                            the product (Q3)\n                                         b) Is not correct. Functional testing is business facing testing (Q2)\n                                         c) Is not correct. User acceptance testing is business facing testing that\n                                            critiques the product (Q3)\n                                         d) Is correct. Component integration testing is technology facing testing\n                                            that supports the team (guides the development) (Q1)\n\nQuestion Correct                           Explanation / Rationale                                                      Learning    K-Level   Number\nNumber Answer                                                                                                           Objective                of\n  (#)                                                                                                                     (LO)                 Points",
    "lo": "FL-5.1.7",
    "kLevel": "K2"
  },
  {
    "set": "B",
    "number": "34",
    "id": "B-34",
    "points": "1 Point",
    "stem": "Given the following risks:\n           1. Ineffective loop implementation causes long system responses\n           2. Consumers change their preferences\n           3. Flooding of the server room\n           4. Patients above a certain age receive inaccurate reports\n\nAnd the following mitigation activities:\n           A. Risk acceptance\n           B. Testing for performance efficiency\n           C. Using boundary value analysis as the test technique\n           D. Risk transfer\n\nWhich of the following BEST matches the risks with the mitigation activities?",
    "options": [
      {
        "id": "a",
        "text": "1C, 2D, 3A, 4B"
      },
      {
        "id": "b",
        "text": "1B, 2D, 3A, 4C"
      },
      {
        "id": "c",
        "text": "1B, 2A, 3D, 4C"
      },
      {
        "id": "d",
        "text": "1C, 2A, 3D, 4B"
      }
    ],
    "selectCount": 1,
    "correct": [
      "c"
    ],
    "explanation": "Considering each of the listed risks and their mitigations:\n                      1. Long system responses (1) can be tested in performance testing\n                          (B)\n                      2. Changes in consumers’ preferences (2) are usually out of our\n                          control, so usually we accept this risk (A)\n                      3. Flooding of the server room (3) can cause significant loss, so we\n                          should transfer the risk, e.g., by buying an insurance policy (D)\n                      4. That patients above a certain age receive inaccurate reports (4)\n                          suggests a potential boundary problem, which can be effectively\n                          detected with test techniques like BVA (C)\n\n                                         Thus:\n                                         a) Is not correct\n                                         b) Is not correct\n                                         c) Is correct. The correct combinations of risk and mitigation are: 1B, 2A,\n                                             3D and 4C\n                                         d) Is not correct",
    "lo": "FL-5.2.4",
    "kLevel": "K2"
  },
  {
    "set": "B",
    "number": "35",
    "id": "B-35",
    "points": "1 Point",
    "stem": "Which of the following is a product quality metric?",
    "options": [
      {
        "id": "a",
        "text": "Mean time to failure"
      },
      {
        "id": "b",
        "text": "Number of defects found"
      },
      {
        "id": "c",
        "text": "Requirements coverage"
      },
      {
        "id": "d",
        "text": "Defect detection percentage"
      }
    ],
    "selectCount": 1,
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. Product quality metrics measure quality characteristics. Mean\n                                            time to failure measures maturity, so it is a product quality metric\n                                         b) Is not correct. This is an example of a defect metric, not a product\n                                            quality metric\n                                         c) Is not correct. This is an example of a coverage metric, not a product\n                                            quality metric\n                                         d) Is not correct. This is an example of a defect metric, not a product\n                                            quality metric\n\nQuestion Correct                            Explanation / Rationale                              Learning    K-Level   Number\nNumber Answer                                                                                    Objective                of\n  (#)                                                                                              (LO)                 Points",
    "lo": "FL-5.3.1",
    "kLevel": "K1"
  },
  {
    "set": "B",
    "number": "36",
    "id": "B-36",
    "points": "1 Point",
    "stem": "You are a member of a test team located in North America, developing a product for a client\nlocated in Europe. The team is agile and follows the DevOps approach and uses a continuous\nintegration/continuous delivery pipeline.\n\nWhich of the following is the LEAST effective way to communicate test progress to the customer?",
    "options": [
      {
        "id": "a",
        "text": "Face-to-face"
      },
      {
        "id": "b",
        "text": "Dashboards"
      },
      {
        "id": "c",
        "text": "Email"
      },
      {
        "id": "d",
        "text": "Video conferencing"
      }
    ],
    "selectCount": 1,
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. The client is in a different location and time zone, so it may\n                    be difficult to communicate face-to-face\n                 b) Is not correct. Dashboards are usually available to any user at any time,\n                    so the difference in time zones will not be as much of a hindrance to\n                    communication as verbal, face-to-face communication\n                 c) Is not correct. Although the time difference between Europe and\n                    America is several hours, and this may cause some inconvenience, it's\n                    certainly not as great as with communicating face-to-face\n                 d) Is not correct. Video conferencing tools are a convenient means of\n                    communication. Although communication between Europe and America\n                    during working hours usually requires one party to connect in the very\n                    early or very late hours, this is not as much of an inconvenience as\n                    verbal, face-to-face communication",
    "lo": "FL-5.3.3",
    "kLevel": "K2"
  },
  {
    "set": "B",
    "number": "37",
    "id": "B-37",
    "points": "1 Point",
    "stem": "Which of the following BEST describes an example of how configuration management (CM)\nsupports testing?",
    "options": [
      {
        "id": "a",
        "text": "Having the version number of the environment, the CM tool can retrieve the version numbers of libraries, stubs and drivers used in that environment"
      },
      {
        "id": "b",
        "text": "Having a record of the values of the inputs, the CM tool can execute the test cases for these configurations and calculate the coverage"
      },
      {
        "id": "c",
        "text": "Having data about the date of purchase of a software license, the CM tool automatically generates information about the fact that the product license is coming to an end"
      },
      {
        "id": "d",
        "text": "Having the version number of the test case, the CM tool can automatically generate test data for this test case"
      }
    ],
    "selectCount": 1,
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. For a complex configuration item (e.g., a test environment),\n                    configuration management (CM) records the items it consists of, their\n                    relationships, and versions\n                 b) Is not correct. CM tools do not execute test cases and do not calculate\n                    coverage\n                 c) Is not correct. A CM tool is not a licensed management tool\n                 d) Is not correct. CM tools do not generate test data\n\nQuestion Correct                            Explanation / Rationale                                Learning    K-Level   Number\nNumber Answer                                                                                      Objective                of\n  (#)                                                                                                (LO)                 Points",
    "lo": "FL-5.4.1",
    "kLevel": "K2"
  },
  {
    "set": "B",
    "number": "38",
    "id": "B-38",
    "points": "1 Point",
    "stem": "You are testing a sort function that gets a set of numbers as input and returns the same set of\nnumbers sorted in ascending order. The log from the test execution looks as follows.\n\nEnvironment configuration: sort function build 2.002.2182, test case set: TCS-3, # of TCs: 5\nTest run ID: 736\nStart 12:43:21.003\n12:43:21.003 Execution of TC1. Input: 3.              Output: 3.            Result: passed\n12:43:21.003 Execution of TC2. Input: 3 11 6 5.       Output: 3 5 6 11.     Result: passed\n12:43:21.004 Execution of TC3. Input: 8 7 3 7 1.      Output: 1 3 7 8.      Result: failed\n12:43:21.005 Execution of TC4. Input: -2 -2 -2 -3 -3. Output: -3 -2.        Result: failed\n12:43:21.005 Execution of TC5. Input: 0 -2 0 3 4 4. Output: -2 0 3 4.       Result: failed\nEnd 12:43:21.005\nTotal time of test cycle: 0:00:00.002\n\nWhich of the following provides the BEST description of the failure that can be used in a defect\nreport?",
    "options": [
      {
        "id": "a",
        "text": "The system fails to sort several sets of numbers. Reference: TC3, TC4, TC5."
      },
      {
        "id": "b",
        "text": "The system seems to disregard duplicates while sorting. Reference: TC3, TC4, TC5."
      },
      {
        "id": "c",
        "text": "The system fails to sort negative numbers. Reference: TC4, TC5."
      },
      {
        "id": "d",
        "text": "TC3, TC4 and TC5 have defects (duplicate input data) and should be corrected."
      }
    ],
    "selectCount": 1,
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. While the sentence is true, it does not provide much value\n                    for the developer\n                 b) Is correct. From the test results it seems that the system ignores\n                    duplicates and sorts the list disregarding the repetitions. This is probably\n                    the cause of failures in TC3, TC4, TC5. Such information may help the\n                    developer to find the defect and fix it more efficiently\n                 c) Is not correct. The system does not fail in sorting negative numbers.\n                    The problem is rather in disregarding duplicates\n                 d) Is not correct. The test cases TC3, TC4 and TC5 fail, but we aren’t\n                    aware that the test cases have any defects",
    "lo": "FL-5.5.1",
    "kLevel": "K3"
  },
  {
    "set": "B",
    "number": "39",
    "id": "B-39",
    "points": "1 Point",
    "stem": "Given the following descriptions:\n           1. Support workflow tracking\n           2. Facilitate communication\n           3. Virtual machines\n           4. Support reviews\n\nAnd the following test tool categories:\n           A. Static testing tools\n           B. Tools supporting scalability and deployment standardization\n           C. DevOps tools\n           D. Collaboration tools\nWhich of the following BEST matches the descriptions and categories?",
    "options": [
      {
        "id": "a",
        "text": "1A, 2B, 3C, 4D"
      },
      {
        "id": "b",
        "text": "1B, 2D, 3C, 4A"
      },
      {
        "id": "c",
        "text": "1C, 2D, 3B, 4A"
      },
      {
        "id": "d",
        "text": "1D, 2C, 3A, 4B"
      }
    ],
    "selectCount": 1,
    "correct": [
      "c"
    ],
    "explanation": "Considering each of the listed tool categories and their descriptions:\n                       A. Static testing tools – support the tester in performing reviews and\n                           static analysis (4)\n                       B. Tools supporting scalability and deployment standardization – For\n                           example, virtual machines, containerization tools (3)\n                       C. DevOps tools – support the DevOps delivery pipeline, workflow\n                           tracking, automated build process(es), continuous\n                           integration/continuous delivery (CI/CD) (1)\n                       D. Collaboration tools – facilitate communication (2)\n\n                                         Thus:\n                                         a) Is not correct\n                                         b) Is not correct\n                                         c) Is correct. The correct match is: 1C, 2D, 3B, 4A\n                                         d) Is not correct\n\nQuestion Correct                             Explanation / Rationale                                Learning    K-Level   Number\nNumber Answer                                                                                       Objective                of\n  (#)                                                                                                 (LO)                 Points",
    "lo": "FL-6.1.1",
    "kLevel": "K2"
  },
  {
    "set": "B",
    "number": "40",
    "id": "B-40",
    "points": "1 Point",
    "stem": "Which of the following is MOST likely to be a benefit of test automation?",
    "options": [
      {
        "id": "a",
        "text": "It provides coverage measures that are too complicated for humans to derive"
      },
      {
        "id": "b",
        "text": "It shares responsibility for the testing with the tool vendor"
      },
      {
        "id": "c",
        "text": "It removes the need for critical thinking when analyzing test results"
      },
      {
        "id": "d",
        "text": "It generates test cases from an analysis of the program code"
      }
    ],
    "selectCount": 1,
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. Test automation can provide measures that are too\n                    complicated for humans to derive, such as white-box testing coverage\n                    measures for all but the most trivial code\n                 b) Is not correct. By using test tools, the responsibility for the testing is\n                    NOT shared with the tool vendor as the vendor is not involved in the\n                    testing, and it is the tester’s responsibility. The only possible\n                    responsibility that could be assigned to the tool vendor is if the tool fails\n                    to work as expected and provides incorrect test results\n                 c) Is not correct. Testers still need to apply critical thinking when analyzing\n                    anomalies in the test results to determine their likely cause\n                 d) Is not correct. Neither testers nor tools can generate test cases simply\n                    from an analysis of the program code as the code is the implementation\n                    and provides no information on the expected results, which will need to\n                    come from another part of the test basis, such as the design\n                    specification",
    "lo": "FL-6.2.1",
    "kLevel": "K1"
  },
  {
    "set": "C",
    "number": "1",
    "id": "C-1",
    "points": "1 Point",
    "stem": "Which of the following is a typical test objective?",
    "options": [
      {
        "id": "a",
        "text": "Validating that documented requirements are met"
      },
      {
        "id": "b",
        "text": "Causing failures and identifying defects"
      },
      {
        "id": "c",
        "text": "Initiating errors and identifying root causes"
      },
      {
        "id": "d",
        "text": "Verifying the test object meets user expectations"
      }
    ],
    "selectCount": 1,
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. Validating that documented requirements are met is\n                    incorrect as validation is concerned with meeting user requirements and\n                    expectations, while verification is concerned with meeting specified\n                    requirements, so this would be correct if we replaced ‘validating’ with\n                    ‘verifying’\n                 b) Is correct. Causing failures and identifying defects is probably the most\n                    common objective of dynamic testing\n                 c) Is not correct. Initiating errors and identifying root causes is incorrect\n                    because testers do not initiate errors, they try to cause failures. Errors\n                    are typically made by developers (and cannot really be initiated) and\n                    result in defects, which testers attempt to identify either directly through\n                    static testing or indirectly through failures with dynamic testing.\n                    Identifying root causes is useful but is part of debugging, which is a\n                    separate activity from testing\n                 d) Is not correct. Verifying the test object meets user expectations is\n                    incorrect as verification is concerned with checking specified\n                    (documented) requirements are met, while validation is concerned with\n                    meeting user requirements and expectations, so this would be correct if\n                    we replaced ‘verifying’ with ‘validating’\n\nQuestion Correct                             Explanation / Rationale                              Learning    K-Level   Number\nNumber Answer                                                                                     Objective                of\n  (#)                                                                                               (LO)                 Points",
    "lo": "FL-1.1.1",
    "kLevel": "K1"
  },
  {
    "set": "C",
    "number": "2",
    "id": "C-2",
    "points": "1 Point",
    "stem": "Which of the following statements BEST describes the difference between testing and debugging?",
    "options": [
      {
        "id": "a",
        "text": "Testing causes failures while debugging fixes failures"
      },
      {
        "id": "b",
        "text": "Testing is a negative activity while debugging is a positive activity"
      },
      {
        "id": "c",
        "text": "Testing determines that defects exist while debugging removes defects"
      },
      {
        "id": "d",
        "text": "Testing finds the cause of defects while debugging fixes the cause of defects"
      }
    ],
    "selectCount": 1,
    "correct": [
      "c"
    ],
    "explanation": "a) Is not correct. Dynamic testing does cause failures (from which defects\n                    can then be located and fixed). However, debugging is concerned with\n                    locating defects and fixing these defects. Therefore, debugging does not\n                    fix failures\n                 b) Is not correct. Both testing and debugging contribute to improving the\n                    quality of the test object, so both should be considered positively.\n                    Debugging is generally considered to be a positive activity as it is fixing\n                    something. Dynamic testing does involve intentionally causing the test\n                    object to fail, which is why some people consider it a negative activity,\n                    but that is a very narrow view (and not one typically held by testers).\n                    Both positive and negative test cases are possible. Positive test cases\n                    check that the test object correctly performs what it is supposed to do,\n                    while negative testing checks that the test object does not do what it is\n                    not supposed to do\n                 c) Is correct. Testing determines that defects exist either directly through\n                    observation of the defect in reviews (or by a tool in static analysis), or\n                    indirectly by causing a failure in dynamic testing. Debugging is a\n                    separate activity from testing (normally performed by developers) and is\n                    concerned with locating defects (only for dynamic testing) and fixing the\n                    defects\n                 d) Is not correct. The causes of defects are typically human errors. Testing\n                    finds defects either directly through static testing, or indirectly by\n                    causing failures in dynamic testing, and debugging fixes defects. So,\n                    testing does not find the cause of defects and debugging does not fix\n                    the causes of defects\n\nQuestion Correct                           Explanation / Rationale                                                         Learning    K-Level   Number\nNumber Answer                                                                                                              Objective                of\n  (#)                                                                                                                        (LO)                 Points",
    "lo": "FL-1.1.2",
    "kLevel": "K2"
  },
  {
    "set": "C",
    "number": "3",
    "id": "C-3",
    "points": "1 Point",
    "stem": "The ‘absence-of-defects fallacy’ is one of the principles of testing. Which of the following is an\nexample of addressing this principle in practice?",
    "options": [
      {
        "id": "a",
        "text": "Explaining that it is not possible for testing to show the absence of defects"
      },
      {
        "id": "b",
        "text": "Supporting the end users to perform acceptance testing"
      },
      {
        "id": "c",
        "text": "Ensuring that no implementation defects remain in the delivered system"
      },
      {
        "id": "d",
        "text": "Modifying tests that cause no failures to ensure few defects remain"
      }
    ],
    "selectCount": 1,
    "correct": [
      "b"
    ],
    "explanation": "The ‘absence-of-defects fallacy’ is concerned with the idea that ensuring\n                 correctness in accordance with the requirements (i.e., verifying the absence\n                 of implementation defects) does not guarantee user satisfaction with the\n                 system. To address this it is also necessary to validate that the system\n                 meets users' needs and expectations, fulfills business objectives, and\n                 outperforms competing systems.\n\n                                         a) Is not correct. The ‘testing shows the presence, not the absence of\n                                            defects’ principle explains that while testing can detect the existence of\n                                            defects in the test object, it is not possible to demonstrate that there are\n                                            no defects and, therefore, guarantee its correctness. Therefore,\n                                            explaining that it is not possible for testing to show the absence of\n                                            defects would partially address this principle, not the ‘absence-of-\n                                            defects’ fallacy\n                                         b) Is correct. By supporting the end user to perform acceptance testing it\n                                            should be possible to validate that the system meets users' needs and\n                                            expectations\n                                         c) Is not correct. It is not possible to ensure that no implementation defects\n                                            remain in the delivered system as the ‘testing shows the presence, not\n                                            the absence of defects’ principle explains that while testing can detect\n                                            the existence of defects in the test object, it is not possible to\n                                            demonstrate that there are no defects and, therefore, guarantee its\n                                            correctness\n                                         d) Is not correct. Modifying tests that cause no failures to ensure few\n                                            defects remain is one way to address the ‘tests wear out’ principle. This\n                                            principle is concerned with the idea that repeating identical tests on\n                                            unaltered code is unlikely to uncover novel defects and therefore,\n                                            modifying tests may be essential. This will not validate that the system\n                                            meets users' needs and expectations\n\nQuestion Correct                            Explanation / Rationale                                                        Learning    K-Level   Number\nNumber Answer                                                                                                              Objective                of\n  (#)                                                                                                                        (LO)                 Points",
    "lo": "FL-1.3.1",
    "kLevel": "K2"
  },
  {
    "set": "C",
    "number": "4",
    "id": "C-4",
    "points": "1 Point",
    "stem": "Which of the following test activities are MOST likely to involve the application of boundary value\nanalysis and equivalence partitioning?",
    "options": [
      {
        "id": "a",
        "text": "Test implementation"
      },
      {
        "id": "b",
        "text": "Test design"
      },
      {
        "id": "c",
        "text": "Test execution"
      },
      {
        "id": "d",
        "text": "Test monitoring"
      },
      {
        "id": "e",
        "text": "Test analysis"
      }
    ],
    "selectCount": 2,
    "correct": [
      "b",
      "e"
    ],
    "explanation": "Given the following description of test analysis:\n                 To identify the features that require testing, the test basis is analyzed and\n                 defined as test conditions, which are then prioritized along with related\n                 risks. The systematic identification of test conditions as coverage items\n                 often involves using test techniques both during test analysis and as part of\n                 the test design activity.\n                 From the above description, it can be seen that test techniques are often\n                 used in the test analysis and test design activities. Boundary value analysis\n                 and equivalence partitioning are test techniques.\n\n                                         a) Is not correct. Test implementation is not likely to involve the use of test\n                                            techniques as it is mostly concerned with assembling test cases into\n                                            test procedures, while test techniques create test cases\n                                         b) Is correct. Test design is likely to involve the use of test techniques to\n                                            create test cases from test conditions and coverage items\n                                         c) Is not correct. Test execution is not likely to involve the use of test\n                                            techniques as it is mostly concerned with executing test procedures\n                                            (and so test cases), while test techniques create test cases\n                                         d) Is not correct. Test monitoring is not likely to involve the use of test\n                                            techniques. Test monitoring is mostly concerned with ongoing checks to\n                                            ensure the plan is being followed, while test techniques create test\n                                            cases\n                                         e) Is correct. Test analysis is likely to involve the use of test techniques to\n                                            identify test conditions\n\nQuestion Correct                            Explanation / Rationale                                Learning    K-Level   Number\nNumber Answer                                                                                      Objective                of\n  (#)                                                                                                (LO)                 Points",
    "lo": "FL-1.4.1",
    "kLevel": "K2"
  },
  {
    "set": "C",
    "number": "5",
    "id": "C-5",
    "points": "1 Point",
    "stem": "Given the following testware:\n           1. Coverage items\n           2. Change requests\n           3. Test execution schedule\n           4. Prioritized test conditions\n\nAnd the following test activities\n           A. Test analysis\n           B. Test design\n           C. Test implementation\n           D. Test completion\n\nWhich of the following BEST shows the testware produced by the activities?",
    "options": [
      {
        "id": "a",
        "text": "1B, 2D, 3C, 4A"
      },
      {
        "id": "b",
        "text": "1B, 2D, 3A, 4C"
      },
      {
        "id": "c",
        "text": "1D, 2C, 3A, 4B"
      },
      {
        "id": "d",
        "text": "1D, 2C, 3B, 4A"
      }
    ],
    "selectCount": 1,
    "correct": [
      "a"
    ],
    "explanation": "Considering each of the listed test activities and their output testware:\n                      A. Test analysis - prioritized test conditions (4) (e.g., acceptance\n                          criteria), and defect reports for defects identified in the test basis\n                      B. Test design - prioritized test cases, test charters, coverage items\n                          (1), test data requirements, and test environment requirements\n                      C. Test implementation - test procedures, automated test scripts,\n                          test suites, test data, test execution schedule (3), and test\n                          environment elements such as stubs, drivers, simulators, and\n                          service virtualizations\n                      D. Test completion - test completion report, documented lessons\n                          learned, action items for improvement, and change requests (2)\n                          (as product backlog items)\n\n                                         Thus:\n                                         a) Is correct. The correct match is: 1B, 2D, 3C, 4A\n                                         b) Is not correct\n                                         c) Is not correct\n                                         d) Is not correct\n\nQuestion Correct                            Explanation / Rationale                                  Learning    K-Level   Number\nNumber Answer                                                                                        Objective                of\n  (#)                                                                                                  (LO)                 Points",
    "lo": "FL-1.4.3",
    "kLevel": "K2"
  },
  {
    "set": "C",
    "number": "6",
    "id": "C-6",
    "points": "1 Point",
    "stem": "Which of the following statements about the different testing roles is MOST likely to be\nCORRECT?",
    "options": [
      {
        "id": "a",
        "text": "In Agile software development, the test management role is the primary responsibility of the team, while the testing role is primarily the responsibility of a single individual from outside the team"
      },
      {
        "id": "b",
        "text": "The testing role is primarily responsible for test monitoring and test control, while the test management role is primarily responsible for test planning and test completion"
      },
      {
        "id": "c",
        "text": "In Agile software development, test management activities that span multiple teams are handled by a test manager outside the team, while some test management tasks are handled by the team itself"
      },
      {
        "id": "d",
        "text": "The test management role is primarily responsible for test analysis and test design, while the testing role is primarily responsible for test implementation and test execution"
      }
    ],
    "selectCount": 1,
    "correct": [
      "c"
    ],
    "explanation": "a) Is not correct. Although it is correct to say that in Agile software\n                    development, some of the test management tasks may be handled by\n                    the Agile team itself, the testing role is not primarily the responsibility of\n                    a single individual from outside the team. Instead the testing is more\n                    likely to be performed by various team members following the whole-\n                    team approach\n                 b) Is not correct. The test management role primarily involves activities\n                    related to test planning, test monitoring and test control, and test\n                    completion. So, although this statement is partially correct, it is wrong to\n                    say that the testing role is primarily responsible for test monitoring and\n                    test control\n                 c) Is correct. In Agile software development, some of the test management\n                    tasks may be handled by the Agile team itself. However, for test\n                    activities that span multiple teams within an organization, test managers\n                    outside of the development team may perform these tasks\n                 d) Is not correct. The test management role primarily involves activities\n                    related to test planning, test monitoring and test control, and test\n                    completion, while the testing role is primarily responsible for the\n                    technical and engineering aspects of testing, such as test analysis, test\n                    design, test implementation, and test execution. Thus the test\n                    management role is not normally responsible for test analysis and test\n                    design, although it is correct to say that the testing role is primarily\n                    responsible for test implementation and test execution\n\nQuestion Correct                            Explanation / Rationale                             Learning    K-Level   Number\nNumber Answer                                                                                   Objective                of\n  (#)                                                                                             (LO)                 Points",
    "lo": "FL-1.4.5",
    "kLevel": "K2"
  },
  {
    "set": "C",
    "number": "7",
    "id": "C-7",
    "points": "1 Point",
    "stem": "Which of the following is an advantage of the whole-team approach?",
    "options": [
      {
        "id": "a",
        "text": "Teams with no testers"
      },
      {
        "id": "b",
        "text": "Improved team dynamics"
      },
      {
        "id": "c",
        "text": "Specialist team members"
      },
      {
        "id": "d",
        "text": "Larger team sizes"
      }
    ],
    "selectCount": 1,
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. In the whole-team approach, testers play a vital role by\n                    sharing their testing expertise with the team and guiding product\n                    development. They collaborate with other team members to achieve the\n                    desired quality levels and work with business representatives to create\n                    acceptance tests. Testers also partner with developers to determine the\n                    optimal test strategy and test automation approaches\n                 b) Is correct. By leveraging the diverse skill sets of each team member\n                    most effectively, the whole-team approach fosters superior team\n                    dynamics, promotes robust communication and collaboration, and\n                    generates a synergistic effect that benefits the entire project\n                 c) Is not correct. The whole-team approach allows any team member with\n                    the requisite skills and knowledge to undertake any task, thus specialist\n                    team members are not an advantage of this approach\n                 d) Is not correct. There is no specific guidance on the optimum size of\n                    teams using the whole-team approach, and there is no suggestion that\n                    larger teams are better",
    "lo": "FL-1.5.2",
    "kLevel": "K1"
  },
  {
    "set": "C",
    "number": "8",
    "id": "C-8",
    "points": "1 Point",
    "stem": "Which of the following statements about the independence of testing is CORRECT?",
    "options": [
      {
        "id": "a",
        "text": "Independent testers will find defects due to their different technical perspective from developers, but their independence may lead to an adversarial relationship with the developers"
      },
      {
        "id": "b",
        "text": "Developers’ familiarity with their own code means they only find a few defects in it, however their shared software background with testers means these defects would also be found by the testers"
      },
      {
        "id": "c",
        "text": "Independent testing requires testers who are outside the developer’s team and ideally from outside the organization, however these testers find it difficult to understand the application domain"
      },
      {
        "id": "d",
        "text": "Testers from outside the developer’s team are more independent than testers from within the team, but the testers from within the team are more likely to be blamed for delays in product release"
      }
    ],
    "selectCount": 1,
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. The primary benefit of independence of testing is that testers\n                                            are more likely to identify different types of failures and defects\n                                            compared to developers, due to their varied backgrounds, technical\n                                            viewpoints, and potential biases, including cognitive bias. However, the\n                                            main disadvantage of independence of testing is that testers may\n                                            become isolated from the development team, leading to communication\n                                            problems, a lack of collaboration, and potentially an adversarial\n                                            relationship, with testers being blamed for delays and bottlenecks in the\n                                            release process\n                                         b) Is not correct. A developer’s familiarity with the code does not mean that\n                                            they rarely find defects in it, instead this familiarity means they can\n                                            efficiently find many defects in their own code. And, rather than\n                                            developers and testers having a shared background, developers having\n                                            a different background to testers is normally cited as the reason that\n                                            testers and developers find different kinds of defects\n                                         c) Is not correct. Testing can be performed at different levels of\n                                            independence, ranging from no independence for the author to very\n                                            high independence for testers from outside the organization. In most\n                                            projects, multiple levels of independence are utilized, with developers\n                                            performing component testing and component integration testing, the\n                                            test team performing system testing and system integration testing, and\n                                            business representatives performing acceptance testing. So, testers can\n                                            be in the developer’s team and do not need to come from outside the\n                                            organization. Knowledge of the application domain will change from\n                                            case to case and is not dependent on the level of independence\n                                         d) Is not correct. Testing can be performed at different levels of\n                                            independence, ranging from no independence for the author to very\n                                            high independence for testers from outside the organization, with testers\n                                            from outside the developer’s team generally more independent than\n                                            testers from within the team. However, there is more reason to believe\n                                            that testers from outside the team are likely to be more isolated from the\n                                            developers and so are more likely to be blamed for delays in product\n                                            release\n\nQuestion Correct                            Explanation / Rationale                              Learning    K-Level   Number\nNumber Answer                                                                                    Objective                of\n  (#)                                                                                              (LO)                 Points",
    "lo": "FL-1.5.3",
    "kLevel": "K2"
  },
  {
    "set": "C",
    "number": "9",
    "id": "C-9",
    "points": "1 Point",
    "stem": "Which of the following is a good testing practice that applies to all software development lifecycles?",
    "options": [
      {
        "id": "a",
        "text": "For each test level, there is a corresponding development level"
      },
      {
        "id": "b",
        "text": "For each test objective, there is a corresponding development objective"
      },
      {
        "id": "c",
        "text": "For every test activity, there is a corresponding user activity"
      },
      {
        "id": "d",
        "text": "For every development activity, there is a corresponding test activity"
      }
    ],
    "selectCount": 1,
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. Quality control applies to all development activities,\n                    meaning that every software development activity has a corresponding\n                    test activity. However, here we are attempting to equate test levels with\n                    development levels, and, although we know what is meant by ‘test\n                    levels’, there is no common understanding of the term ‘ development\n                    level’\n                 b) Is not correct. Every software development activity has a corresponding\n                    test activity; however test objectives are quite different. For instance,\n                    there might be a test objective of ensuring that a test object adheres to\n                    a contractual requirement that a certain type of testing must be\n                    performed before delivery. In this case there is no reason for there to be\n                    a corresponding development objective\n                 c) Is not correct. Quality control applies to all development activities,\n                    meaning that every software development activity has a corresponding\n                    test activity. However, the same symmetry does not apply to testing and\n                    user activities. For instance, for some systems it is difficult to even\n                    identify the end users. Also, some test activities are focused on\n                    developers (e.g., testing for ease of maintainability), which has no user\n                    aspect to it\n                 d) Is correct. Quality control applies to all development activities, meaning\n                    that every software development activity has a corresponding test\n                    activity\n\nQuestion Correct                             Explanation / Rationale                               Learning    K-Level   Number\nNumber Answer                                                                                      Objective                of\n  (#)                                                                                                (LO)                 Points",
    "lo": "FL-2.1.2",
    "kLevel": "K1"
  },
  {
    "set": "C",
    "number": "10",
    "id": "C-10",
    "points": "1 Point",
    "stem": "Which of the following is an example of a test-first approach to development?",
    "options": [
      {
        "id": "a",
        "text": "Component Test-Driven Development"
      },
      {
        "id": "b",
        "text": "Integration Test-Driven Development"
      },
      {
        "id": "c",
        "text": "System Test-Driven Development"
      },
      {
        "id": "d",
        "text": "Acceptance Test-Driven Development"
      }
    ],
    "selectCount": 1,
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. Component Test-Driven Development is not a correct\n                    example of a test-first approach to development\n                 b) Is not correct. Integration Test-Driven Development is not a correct\n                    example of a test-first approach to development\n                 c) Is not correct. System Test-Driven Development is not a correct\n                    example of a test-first approach to development\n                 d) Is correct. Acceptance Test-Driven Development (ATDD) is a well-\n                    known example of a test-first approach to development",
    "lo": "FL-2.1.3",
    "kLevel": "K1"
  },
  {
    "set": "C",
    "number": "11",
    "id": "C-11",
    "points": "1 Point",
    "stem": "Which of the following provides the BEST description of shift-left?",
    "options": [
      {
        "id": "a",
        "text": "When agreed by the developers, manual activities on the left-hand side of the test process are automated to support the principle of ‘early testing saves time and money’"
      },
      {
        "id": "b",
        "text": "Where cost-effective, test activities are moved earlier in the software development lifecycle (SDLC) to reduce the total cost of quality by reducing the number of defects found later in the SDLC"
      },
      {
        "id": "c",
        "text": "When they have spare time available, testers are required to automate tests for regression testing, starting with component tests and component integration tests"
      },
      {
        "id": "d",
        "text": "When available, testers are trained to perform tasks early in the SDLC to allow more test activities to be automated later in the SDLC"
      }
    ],
    "selectCount": 1,
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. Practices involved in shift left are aimed at implementing\n                    more test activities in the early phases of the software development life\n                    cycle (SDLC), portraying the SDLC as moving from left to right. There is\n                    no such thing as the left-hand side of the test process\n                 b) Is correct. Shift left emphasizes the importance of starting testing earlier\n                    in the SDLC. Implementing shift left testing necessitates additional\n                    training, and increased effort and costs during the early phases of the\n                    SDLC, nevertheless, overall savings should be higher\n                 c) Is not correct. Although automated component tests and component\n                    integration tests for regression testing are generally valuable, the\n                    creation of these tests is normally the responsibility of the developers,\n                    and if a continuous integration/continuous delivery (CI/CD) approach is\n                    followed, then these tests will have been submitted with the code. In\n                    some situations the tester may automate tests for regression testing,\n                    and sometimes even for component tests and component integration\n                    tests, however this is not part of shift left which moves testing earlier in\n                    the SDLC\n                 d) Is not correct. Training testers to perform tasks early in the SDLC would\n                    support a shift left approach by emphasizing the importance of starting\n                    testing earlier in the SDLC. However, automating more test activities to\n                    be performed later in the SDLC is not part of shift-left\n\nQuestion Correct                             Explanation / Rationale                             Learning    K-Level   Number\nNumber Answer                                                                                    Objective                of\n  (#)                                                                                              (LO)                 Points",
    "lo": "FL-2.1.5",
    "kLevel": "K2"
  },
  {
    "set": "C",
    "number": "12",
    "id": "C-12",
    "points": "1 Point",
    "stem": "Which of the following is LEAST likely to occur as a result of a retrospective?",
    "options": [
      {
        "id": "a",
        "text": "The quality of future test objects improves by identifying improvements in development practices"
      },
      {
        "id": "b",
        "text": "Test efficiency improves by speeding up the configuration of test environments through automation"
      },
      {
        "id": "c",
        "text": "End users’ understanding of the development and test processes is improved"
      },
      {
        "id": "d",
        "text": "Automated test scripts are enhanced through feedback from developers"
      }
    ],
    "selectCount": 1,
    "correct": [
      "c"
    ],
    "explanation": "a) Is not correct. One of the purposes of retrospectives is to identify\n                    potential process improvements, which, if put into practice, should result\n                    in the quality of future outputs of the development process (test objects)\n                    being higher. So, this is likely to occur as a result of a retrospective\n                 b) Is not correct. A benefit of retrospectives for testing includes increased\n                    test efficiency through process improvements. So, this is likely to occur\n                    as a result of a retrospective\n                 c) Is correct. Participants at retrospectives typically include testers,\n                    developers, architects, product owners, and business analysts, but end\n                    users are rarely invited or attend these meetings – and they are also\n                    unlikely to receive any reports from these meetings. So, it is very\n                    unlikely that they will learn and understand more about the development\n                    and test processes through retrospectives\n                 d) Is not correct. A benefit of retrospectives for testing includes improved\n                    quality of testware (including automated test scripts) through joint\n                    reviews with developers. So, this is likely to occur as a result of a\n                    retrospective\n\nQuestion Correct                             Explanation / Rationale                            Learning    K-Level   Number\nNumber Answer                                                                                   Objective                of\n  (#)                                                                                             (LO)                 Points",
    "lo": "FL-2.1.6",
    "kLevel": "K2"
  },
  {
    "set": "C",
    "number": "13",
    "id": "C-13",
    "points": "1 Point",
    "stem": "Which of the following test levels is MOST likely being performed if the testing is focused on\nvalidation and is not being performed by testers?",
    "options": [
      {
        "id": "a",
        "text": "Component testing"
      },
      {
        "id": "b",
        "text": "Component integration testing"
      },
      {
        "id": "c",
        "text": "System integration testing"
      },
      {
        "id": "d",
        "text": "Acceptance testing"
      }
    ],
    "selectCount": 1,
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. Component testing (also called unit testing) involves\n                    testing individual components in isolation and is mostly verification\n                    against a specification, rather than validation against user needs.\n                    However, this testing is not normally performed by testers, as\n                    developers usually carry out this testing in their development\n                    environment\n                 b) Is not correct. Component integration testing involves testing the\n                    interfaces and interactions between components and is mostly\n                    verification against a specification, rather than validation against user\n                    needs. However, this testing is not normally performed by testers, as\n                    developers usually carry out this testing\n                 c) Is not correct. System integration testing examines the interfaces with\n                    other systems and external services and is mostly verification against a\n                    specification, rather than validation against user needs. This type of\n                    testing is also most often performed by testers\n                 d) Is correct. Acceptance testing focuses on validating that the system\n                    meets the user's business needs and is ready for deployment. Ideally,\n                    this testing is carried out by the end users\n\nQuestion Correct                           Explanation / Rationale                               Learning    K-Level   Number\nNumber Answer                                                                                    Objective                of\n  (#)                                                                                              (LO)                 Points",
    "lo": "FL-2.2.1",
    "kLevel": "K2"
  },
  {
    "set": "C",
    "number": "14",
    "id": "C-14",
    "points": "1 Point",
    "stem": "The navigation system software has been updated due to it suggesting routes that break traffic\nlaws, such as driving the wrong way down one-way streets. Which of the following BEST describes\nthe testing that will be performed?",
    "options": [
      {
        "id": "a",
        "text": "Only confirmation testing"
      },
      {
        "id": "b",
        "text": "Confirmation testing then regression testing"
      },
      {
        "id": "c",
        "text": "Only regression testing"
      },
      {
        "id": "d",
        "text": "Regression testing then confirmation testing"
      }
    ],
    "selectCount": 1,
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. Confirmation testing to check that the updates have\n                    resulted in a correct implementation is necessary, however, it would\n                    then be sensible to perform regression testing to ensure that no defects\n                    have been introduced or uncovered in unchanged areas of the system\n                 b) Is correct. Confirmation testing will check that the updates have resulted\n                    in a correct implementation, and then regression testing will be used to\n                    ensure that no defects have been introduced or uncovered in\n                    unchanged areas of the system\n                 c) Is not correct. Regression testing should be used to ensure that no\n                    defects have been introduced or uncovered in unchanged areas of the\n                    system when the update was made, however it is also necessary to\n                    perform confirmation testing that will check that the updates have\n                    resulted in a correct implementation\n                 d) Is not correct. Confirmation testing will check that the updates have\n                    resulted in a correct implementation, and regression testing will be used\n                    to ensure that no defects have been introduced or uncovered in\n                    unchanged areas of the system. However, when performed (i.e., when\n                    an update needs to be tested), confirmation testing precedes regression\n                    testing",
    "lo": "FL-2.2.3",
    "kLevel": "K2"
  },
  {
    "set": "C",
    "number": "15",
    "id": "C-15",
    "points": "1 Point",
    "stem": "Given the following example defects:\n          i.   Two different parts of the design specification disagree due to the complexity of the\n               design\n         ii.   A response time is too long and so makes users lose patience\n        iii.   A path in the code cannot be reached during execution\n        iv.    A variable is declared but never subsequently used in the program\n         v.    The amount of memory needed by the program to generate a report is too high\n\nWhich of the following BEST identifies example defects that could be found by static testing (rather\nthan dynamic testing)?",
    "options": [
      {
        "id": "a",
        "text": "ii, v"
      },
      {
        "id": "b",
        "text": "iii, v"
      },
      {
        "id": "c",
        "text": "i, ii, iv"
      },
      {
        "id": "d",
        "text": "i, iii, iv"
      }
    ],
    "selectCount": 1,
    "correct": [
      "d"
    ],
    "explanation": "Considering each of the listed example defects:\n                                              i.  Two different parts of the design specification disagree due to the\n                                                  complexity of the design – this is an example of a specification\n                                                  defect, which includes inconsistencies, ambiguities,\n                                                  contradictions, omissions, inaccuracies, and duplications, which\n                                                  can most easily be found by static testing\n                                             ii.  A response time is too long and so makes users lose patience –\n                                                  this is an example of a response time defect, which can only be\n                                                  detected in practice by executing the program and measuring the\n                                                  response time, which can most easily be found by dynamic\n                                                  testing\n                                            iii.  A path in the code cannot be reached during execution - this is an\n                                                  example of a coding defect, which includes variables with\n                                                  undefined values, undeclared variables, duplicated or\n                                                  unreachable code, and excessive code complexity, which can\n                                                  most easily be found by static testing\n                                            iv.   A variable is declared but never subsequently used in the\n                                                  program - this is an example of a coding defect, which includes\n                                                  variables with undefined values, undeclared variables, duplicated\n                                                  or unreachable code, and excessive code complexity, which can\n                                                  most easily be found by static testing\n                                             v.   The amount of memory needed by the program to generate a\n                                                  report is too high – this is an example of a performance defect,\n                                                  which can only be detected in practice by executing the program\n                                                  and measuring the memory used, which can most easily be found\n                                                  by dynamic testing\n                                         Thus:\n                                         a) Is not correct\n                                         b) Is not correct\n                                         c) Is not correct\n                                         d) Is correct. The correct match for static testing is i, iii, and iv\n\nQuestion Correct                            Explanation / Rationale                             Learning    K-Level   Number\nNumber Answer                                                                                   Objective                of\n  (#)                                                                                             (LO)                 Points",
    "lo": "FL-3.1.3",
    "kLevel": "K2"
  },
  {
    "set": "C",
    "number": "16",
    "id": "C-16",
    "points": "1 Point",
    "stem": "Which of the following is a benefit of early and frequent stakeholder feedback?",
    "options": [
      {
        "id": "a",
        "text": "Changes to requirements are understood and implemented earlier"
      },
      {
        "id": "b",
        "text": "It ensures business stakeholders understand user requirements"
      },
      {
        "id": "c",
        "text": "It allows product owners to change their requirements as often as they want"
      },
      {
        "id": "d",
        "text": "End users are told which requirements will not be implemented prior to release"
      }
    ],
    "selectCount": 1,
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. Obtaining feedback from stakeholders early and often in the\n                    software development process can be highly beneficial. It facilitates\n                    early communication of potential quality issues, can prevent\n                    misunderstandings about requirements, and ensures that any changes\n                    in stakeholder requirements are understood and implemented sooner\n                 b) Is not correct. The feedback is from stakeholders, so providing feedback\n                    is unlikely to improve their understanding of their own user requirements\n                 c) Is not correct. Obtaining feedback from stakeholders early and often in\n                    the software development process can be highly beneficial. It facilitates\n                    early communication of potential quality issues, can prevent\n                    misunderstandings about requirements, and ensures that any changes\n                    in stakeholder requirements are understood and implemented sooner.\n                    However, because changes in requirements can be understood and\n                    implemented sooner, it does not mean that unlimited changes to\n                    requirements are encouraged\n                 d) Is not correct. The feedback is from stakeholders and does not cover\n                    communication to them. Communications with end users could include\n                    telling them about which requirements will not be implemented prior to\n                    release, but ideally this should not happen at all",
    "lo": "FL-3.2.1",
    "kLevel": "K1"
  },
  {
    "set": "C",
    "number": "17",
    "id": "C-17",
    "points": "1 Point",
    "stem": "Given the following review types:\n           1. Technical review\n           2. Informal review\n           3. Inspection\n           4. Walkthrough\n\nAnd the following descriptions:\n           A. Includes objectives such as gaining consensus, generating new ideas, and\n               motivating authors to improve\n           B. Includes objectives such as educating reviewers, gaining consensus, generating\n               new ideas and detecting potential defects\n           C. The main objective is detecting potential defects and it requires metrics collection to\n               support process improvement\n           D. The main objective is detecting potential defects and it generates no formal\n               documented output\n\nWhich of the following BEST matches the review types and the descriptions?",
    "options": [
      {
        "id": "a",
        "text": "1A, 2B, 3C, 4D"
      },
      {
        "id": "b",
        "text": "1A, 2D, 3C, 4B"
      },
      {
        "id": "c",
        "text": "1B, 2C, 3D, 4A"
      },
      {
        "id": "d",
        "text": "1C, 2D, 3A, 4B"
      }
    ],
    "selectCount": 1,
    "correct": [
      "b"
    ],
    "explanation": "Considering each of the listed review types:\n                                              1. Technical review - This type of review is performed by technically\n                                                  qualified reviewers and led by a moderator. The objectives are to\n                                                  gain consensus and make decisions on technical problems while\n                                                  also evaluating quality and building confidence in the work\n                                                  product, generating new ideas, motivating and enabling authors to\n                                                  improve, and detecting anomalies\n                                              2. Informal review - The main objective is to detect anomalies. The\n                                                  process is not defined and does not require formal documented\n                                                  output\n                                              3. Inspection - This is the most formal review type, and it follows the\n                                                  complete generic review process. The primary objective is to find\n                                                  the most anomalies, and other objectives include evaluating\n                                                  quality and building confidence in the work product, motivating\n                                                  and enabling authors to improve, and collecting metrics that can\n                                                  be used to enhance the software development lifecycle (SDLC),\n                                                  including the inspection process. The author cannot act as the\n                                                  review leader or scribe\n                                              4. Walkthrough - Led by the author, this type of review serves\n                                                  various objectives such as evaluating quality and building\n                                                  confidence in the work product, educating reviewers, gaining\n                                                  consensus, generating new ideas, motivating and enabling\n                                                  authors to improve, and detecting anomalies. Reviewers might\n                                                  perform an individual review before the walkthrough, but this is\n                                                  not mandatory\n\n                                                    A. Includes objectives such as gaining consensus, generating new\n                                                       ideas, and motivating authors to improve\n                                                    B. Includes objectives such as educating reviewers, gaining\n                                                       consensus, generating new ideas and detecting anomalies\n                                                    C. The main objective is detecting anomalies and it requires metrics\n                                                       collection to support process improvement\n\nQuestion Correct                                                      Explanation / Rationale                            Learning    K-Level   Number\nNumber Answer                                                                                                            Objective                of\n  (#)                                                                                                                      (LO)                 Points\n                                                    D. The main objective is detecting anomalies and it generates no\n                                                       formal documented output\n\n                                         Thus:\n                                         a) Is not correct\n                                         b) Is correct.\n                                         c) Is not correct\n                                         d) Is not correct",
    "lo": "FL-3.2.4",
    "kLevel": "K2"
  },
  {
    "set": "C",
    "number": "18",
    "id": "C-18",
    "points": "1 Point",
    "stem": "Which of the following is a factor that contributes to a successful review?",
    "options": [
      {
        "id": "a",
        "text": "Ensure management participate as reviewers"
      },
      {
        "id": "b",
        "text": "Split large work products into smaller parts"
      },
      {
        "id": "c",
        "text": "Set reviewer evaluation as an objective"
      },
      {
        "id": "d",
        "text": "Plan to cover one document per review"
      }
    ],
    "selectCount": 1,
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. To ensure successful reviews, it is important to secure\n                                            management's support for the review process. However that does not\n                                            mean that they should participate as reviewers\n                                         b) Is correct. To ensure successful reviews, it's important to break the work\n                                            product into parts that are small enough to be reviewed in a reasonable\n                                            timescale to prevent reviewers from losing focus during individual\n                                            reviews or review meetings\n                                         c) Is not correct. To ensure successful reviews, it's important to clearly\n                                            define objectives and measurable exit criteria, without evaluating\n                                            participants\n                                         d) Is not correct. To ensure successful reviews, it's important to break\n                                            down the review into smaller chunks to prevent reviewers from losing\n                                            focus during individual reviews or review meetings. So you should not\n                                            plan to cover one document per review\n\nQuestion Correct                           Explanation / Rationale                                   Learning    K-Level   Number\nNumber Answer                                                                                        Objective                of\n  (#)                                                                                                  (LO)                 Points",
    "lo": "FL-3.2.5",
    "kLevel": "K1"
  },
  {
    "set": "C",
    "number": "19",
    "id": "C-19",
    "points": "1 Point",
    "stem": "What is the MAIN difference between black-box test techniques and experience-based test\ntechniques?",
    "options": [
      {
        "id": "a",
        "text": "The test object"
      },
      {
        "id": "b",
        "text": "The test level at which the test technique is used"
      },
      {
        "id": "c",
        "text": "The test basis"
      },
      {
        "id": "d",
        "text": "The software development lifecycle (SDLC) in which the test technique can be used"
      }
    ],
    "selectCount": 1,
    "correct": [
      "c"
    ],
    "explanation": "a) Is not correct. In most cases both black-box test techniques and\n                    experience-based test techniques can be used for the same test objects\n                 b) Is not correct. Both black-box test techniques and experience-based\n                    test techniques can be used at all test levels\n                 c) Is correct. Black-box test techniques (also known as specification-based\n                    techniques) are based on an analysis of the specified behavior of the\n                    test object without reference to its internal structure. So, the test basis is\n                    usually a specification. Experience-based test techniques effectively use\n                    the knowledge and experience of testers for the design and\n                    implementation of test cases. This means that the tester, when\n                    designing tests, may not use the specification at all\n                 d) Is not correct. Experience-based test techniques can detect defects that\n                    may be missed using black-box (and white-box) test techniques. Hence,\n                    experience-based test techniques are complementary to black-box test\n                    techniques and white-box test techniques and both black-box test\n                    techniques and experience-based test techniques can be used in all\n                    SDLCs\n\nQuestion Correct                             Explanation / Rationale                           Learning    K-Level   Number\nNumber Answer                                                                                  Objective                of\n  (#)                                                                                            (LO)                 Points",
    "lo": "FL-4.1.1",
    "kLevel": "K2"
  },
  {
    "set": "C",
    "number": "20",
    "id": "C-20",
    "points": "1 Point",
    "stem": "You are testing a PIN validator, which accepts valid PINs and rejects invalid PINs. A PIN is a\nsequence of digits. A PIN is valid if it consists of four digits, which are not all the same digit. You\nhave identified the following valid equivalence partitions:\n\nVariable: PIN code length\n      • The partition “length correct”                       - four-digit PINs\n      • The partition “length incorrect”                     - PINs with length other than 4\nVariable: Number of different digits\n      • The partition “number of different digits correct”   - PINs with at least two different digits\n      • The partition “number of different digits incorrect” - PINs with all digits being the same\nWhich of the following is the BEST set of input test data to cover the identified equivalence\npartitions?",
    "options": [
      {
        "id": "a",
        "text": "12, 1111, 1234, 12345"
      },
      {
        "id": "b",
        "text": "1, 123, 1111, 1234"
      },
      {
        "id": "c",
        "text": "11, 12, 1111, 12345"
      },
      {
        "id": "d",
        "text": "123, 1222, 12345"
      }
    ],
    "selectCount": 1,
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct.\n                        • Value “12” covers “length incorrect, too few digits”\n                        • Value “1111” covers “length correct” and “number of different\n                            digits incorrect\n                        • Value “1234” again covers “length correct” and “number of\n                            different digits correct”\n                        • Value “12345” covers “length incorrect, too many digits”\n                 b) Is not correct. All partitions are covered, however it only covers the\n                    lower side of “length incorrect”\n                 c) Is not correct. There are no value covering “correct PIN”\n                 d) Is not correct. There are no value covering “number of different digits”\n\nQuestion Correct                            Explanation / Rationale                                                    Learning    K-Level   Number\nNumber Answer                                                                                                          Objective                of\n  (#)                                                                                                                    (LO)                 Points",
    "lo": "FL-4.2.1",
    "kLevel": "K3"
  },
  {
    "set": "C",
    "number": "21",
    "id": "C-21",
    "points": "1 Point",
    "stem": "A developer was asked to implement the following business rule:\n\nINPUT: value (integer number)\n\nIF (value ≤ 100 OR value ≥ 200) THEN write “value incorrect”\n\nELSE write “value OK”\n\nYou design the test cases using 2-value boundary value analysis.\n\nWhich of the following sets of test inputs achieves the greatest coverage?",
    "options": [
      {
        "id": "a",
        "text": "100, 150, 200, 201"
      },
      {
        "id": "b",
        "text": "99, 100, 200, 201"
      },
      {
        "id": "c",
        "text": "98, 99, 100, 101"
      },
      {
        "id": "d",
        "text": "101, 150, 199, 200"
      }
    ],
    "selectCount": 1,
    "correct": [
      "d"
    ],
    "explanation": "The equivalence partitions are: {…, 99, 100}, {101, 102, …, 198, 199}, {200,\n                 201, …}.\n                 Thus, there are 4 boundary values, which are: 100, 101, 199 and 200.\n                 In 2-value BVA, for each boundary value there are two coverage items (the\n                 boundary value and its closest neighbor belonging to the adjacent partition).\n                 As the closest neighbors are also boundary values in the adjacent partition,\n                 then there are just four coverage items.\n\n                                         Thus:\n                                         a) Is not correct. Only 100 and 200 are valid coverage items for 2-value\n                                            BVA, so we achieve 50% coverage\n                                         b) Is not correct. Only 100 and 200 are valid coverage items for 2-value\n                                            BVA, so we achieve 50% coverage\n                                         c) Is not correct. Only 100 and 101 are valid coverage items for 2-value\n                                            BVA, so we achieve 50% coverage\n                                         d) Is correct. 101, 199 and 200 are valid coverage items for 2-value BVA,\n                                            so we achieve 75% coverage",
    "lo": "FL-4.2.2",
    "kLevel": "K3"
  },
  {
    "set": "C",
    "number": "22",
    "id": "C-22",
    "points": "1 Point",
    "stem": "You are working on a project to develop a system to analyze driving test results. You have been\nasked to design test cases based on the following decision table.\n\n                                                                   R1   R2      R3\n\n                           C1: First attempt at the exam?          -        -   F\n\n                           C2: Theoretical exam passed?            T        F   -\n\n                               C3: Practical exam passed?          T        -   F\n\n                                        Issue a driving license?   X\n\n                  Request additional driving lessons?                           X\n\n                      Request to take the exam again?                       X\n\nWhat test data will show that there are contradictory rules in the decision table?",
    "options": [
      {
        "id": "a",
        "text": "C1 = T, C2 = T, C3 = F"
      },
      {
        "id": "b",
        "text": "C1 = T, C2 = F, C3 = T"
      },
      {
        "id": "c",
        "text": "C1 = T, C2 = T, C3 = T and C1 = F, C2 = T, C3 = T"
      },
      {
        "id": "d",
        "text": "C1 = F, C2 = F, C3 = F"
      }
    ],
    "selectCount": 1,
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. The combination (T, T, F) does not match any rule. This\n                                            is an example of omission, not a contradiction\n                                         b) Is not correct. The combination (T, F, T) matches only one column, R2,\n                                            so there is no contradiction\n                                         c) Is not correct. Both combinations (T, T, T) and (F, T, T) match only one\n                                            column, R1, so there is no contradiction\n                                         d) Is correct. The combination (F, F, F) matches both R2 and R3, but R2\n                                            and R3 have different actions, so this shows a contradiction between R2\n                                            and R3.\n\nQuestion Correct                            Explanation / Rationale                             Learning    K-Level   Number\nNumber Answer                                                                                   Objective                of\n  (#)                                                                                             (LO)                 Points",
    "lo": "FL-4.2.3",
    "kLevel": "K3"
  },
  {
    "set": "C",
    "number": "23",
    "id": "C-23",
    "points": "1 Point",
    "stem": "You are designing test cases based on the following state transition diagram:\n\nWhat is the MINIMUM number of test cases required to achieve 100% valid transitions coverage?",
    "options": [
      {
        "id": "a",
        "text": "3"
      },
      {
        "id": "b",
        "text": "2"
      },
      {
        "id": "c",
        "text": "5"
      },
      {
        "id": "d",
        "text": "6"
      }
    ],
    "selectCount": 1,
    "correct": [
      "a"
    ],
    "explanation": "The following three transitions:\n                           “REQUESTING -> CONFIRMED”\n                           “WAITING LIST -> CONFIRMED”\n                           “WAITING LIST -> END”\n                 cannot appear in the same test case, which suggests that at least three test\n                 cases are required. All the other transitions can appear in combination with\n                 one or more of these three transitions, so we need a minimum of three test\n                 cases. In fact, only three sequences are possible:\n                           TC1: START (Room request) → REQUESTING (Available) →\n                           CONFIRMED (Pay) → END\n                           TC2: START (Room request) → REQUESTING (Not available) →\n                           WAITING LIST (Available) → CONFIRMED (Pay) → END\n                           TC3: START (Room request) → REQUESTING (Not available) →\n                           WAITING LIST (Cancel) → END\n                 Thus:\n                  a) Is correct\n                  b) Is not correct\n                  c) Is not correct\n                  d) Is not correct",
    "lo": "FL-4.2.4",
    "kLevel": "K3"
  },
  {
    "set": "C",
    "number": "24",
    "id": "C-24",
    "points": "1 Point",
    "stem": "You want to apply branch testing to the code represented by the following control flow graph.\n\nHow many coverage items do you need to test?",
    "options": [
      {
        "id": "a",
        "text": "2"
      },
      {
        "id": "b",
        "text": "4"
      },
      {
        "id": "c",
        "text": "8"
      },
      {
        "id": "d",
        "text": "7"
      }
    ],
    "selectCount": 1,
    "correct": [
      "c"
    ],
    "explanation": "In branch testing the coverage items are branches, which are represented\n                 by the edges of a control flow graph. There are 8 edges in the control flow\n                 graph.\n\n                                         Thus:\n                                         a) Is not correct\n                                         b) Is not correct\n                                         c) Is correct\n                                         d) Is not correct\n\nQuestion Correct                            Explanation / Rationale                            Learning    K-Level   Number\nNumber Answer                                                                                  Objective                of\n  (#)                                                                                            (LO)                 Points",
    "lo": "FL-4.3.2",
    "kLevel": "K2"
  },
  {
    "set": "C",
    "number": "25",
    "id": "C-25",
    "points": "1 Point",
    "stem": "How can white-box testing be useful in support of black-box testing?",
    "options": [
      {
        "id": "a",
        "text": "White-box coverage measures can help testers evaluate black-box tests in terms of the code coverage achieved by these black-box tests"
      },
      {
        "id": "b",
        "text": "White-box coverage analysis can help testers identify unreachable fragments of the source code"
      },
      {
        "id": "c",
        "text": "Branch testing subsumes black-box test techniques, so achieving full branch coverage guarantees achieving full coverage of any black-box technique"
      },
      {
        "id": "d",
        "text": "White-box test techniques can provide coverage items for black-box techniques"
      }
    ],
    "selectCount": 1,
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. Performing only black-box testing does not provide a\n                    measure of actual code coverage. White-box coverage measures\n                    provide an objective measurement of coverage and provide the\n                    necessary information to allow additional tests to be generated to\n                    increase this coverage, and subsequently increase confidence in the\n                    code\n                 b) Is not correct. This statement is correct, but it has nothing to do with\n                    black-box testing\n                 c) Is not correct. In general there are no relationships between white-box\n                    test techniques and black-box test techniques\n                 d) Is not correct. White-box test techniques are used to design tests based\n                    on the test object itself, while black-box test techniques are used to\n                    design tests based on the specification. Therefore, there is no relation\n                    between coverage items derived from these two types of test\n                    techniques\n\nQuestion Correct                             Explanation / Rationale                               Learning    K-Level   Number\nNumber Answer                                                                                      Objective                of\n  (#)                                                                                                (LO)                 Points",
    "lo": "FL-4.3.3",
    "kLevel": "K2"
  },
  {
    "set": "C",
    "number": "26",
    "id": "C-26",
    "points": "1 Point",
    "stem": "Consider the following list:\n          • Correct input not accepted\n          • Incorrect input accepted\n          • Wrong output format\n          • Division by zero\n\nWhat test technique is MOST PROBABLY used by the tester who uses this list when performing\ntesting?",
    "options": [
      {
        "id": "a",
        "text": "Exploratory testing"
      },
      {
        "id": "b",
        "text": "Fault attack"
      },
      {
        "id": "c",
        "text": "Checklist-based testing"
      },
      {
        "id": "d",
        "text": "Boundary value analysis"
      }
    ],
    "selectCount": 1,
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. Exploratory testing uses test charters, not a list of\n                    possible defects/failures. Although exploratory testing can incorporate\n                    the use of other test techniques, in this case a fault attack is the most\n                    likely option\n                 b) Is correct. This is a list of possible failures. Fault attacks are a\n                    methodical approach to the implementation of error guessing and\n                    require the tester to create or acquire a list of possible errors, defects\n                    and failures, and to design tests that will identify defects associated with\n                    the errors, expose the defects, or cause the failures\n                 c) Is not correct. The tester is using a checklist of items to support their\n                    testing. Both error guessing and checklist-based testing use such lists,\n                    however, the list here is of possible failures, not test conditions, and so\n                    the MOST PROBABLE test technique is fault attack, which focuses on\n                    errors, defects and failures\n                 d) Is not correct. BVA is based on an analysis of boundary values of\n                    equivalence partitions. The above list does not mention equivalence\n                    partitions or their boundaries\n\nQuestion Correct                              Explanation / Rationale                              Learning    K-Level   Number\nNumber Answer                                                                                      Objective                of\n  (#)                                                                                                (LO)                 Points",
    "lo": "FL-4.4.1",
    "kLevel": "K2"
  },
  {
    "set": "C",
    "number": "27",
    "id": "C-27",
    "points": "1 Point",
    "stem": "Which of the following BEST describes how using checklist-based testing can result in increased\ncoverage?",
    "options": [
      {
        "id": "a",
        "text": "Checklist items can be defined at a sufficiently low level of detail, so the tester can implement and execute detailed test cases based on these items"
      },
      {
        "id": "b",
        "text": "Checklists can be automated, so each time an automated test execution covers the checklist items, it results in additional coverage"
      },
      {
        "id": "c",
        "text": "Each checklist item should be tested separately and independently, so the elements cover different areas of the software"
      },
      {
        "id": "d",
        "text": "Two testers designing and executing tests based on the same high-level checklist items will typically perform the testing in slightly different ways"
      }
    ],
    "selectCount": 1,
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. Although it is true that the tester can implement and\n                    execute detailed test cases based on the checklist, it does not explain\n                    how this would result in increased coverage\n                 b) Is not correct. Checklist items should not be automated. But even if they\n                    are, the automated test scripts always execute the tests in the same\n                    way, which usually does not result in increased coverage\n                 c) Is not correct. It is true that each checklist item should be tested\n                    separately and independently. But this impacts the test execution order\n                    and does not impact the achieved coverage, and so does not result in\n                    increased coverage\n                 d) Is correct. If the checklists are high-level, some variability in the actual\n                    testing is likely to occur, resulting in potentially greater coverage but\n                    less repeatability. If two testers follow a checklist of high-level items,\n                    each of them may use different test data, test steps, etc. This way, one\n                    tester will probably cover some areas not covered by the other tester\n                    and this will result in increased coverage\n\nQuestion Correct                            Explanation / Rationale                             Learning    K-Level   Number\nNumber Answer                                                                                   Objective                of\n  (#)                                                                                             (LO)                 Points",
    "lo": "FL-4.4.3",
    "kLevel": "K2"
  },
  {
    "set": "C",
    "number": "28",
    "id": "C-28",
    "points": "1 Point",
    "stem": "Which of the following provides the BEST example of a scenario-oriented acceptance criterion?",
    "options": [
      {
        "id": "a",
        "text": "The application must allow users to delete their account and all associated data upon request"
      },
      {
        "id": "b",
        "text": "When a customer adds an item to their cart and proceeds to checkout, they should be prompted to log in or create an account if they haven’t already done so"
      },
      {
        "id": "c",
        "text": "IF (contain(product(23).Name, cart.products())) THEN return FALSE"
      },
      {
        "id": "d",
        "text": "The website must comply with the ICT Accessibility 508 Standards and ensure that all content is accessible to users with disabilities"
      }
    ],
    "selectCount": 1,
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. This acceptance criterion describes what rules or\n                    regulations the system must adhere to (in this case, the right to be\n                    forgotten). This is an example of a rule-oriented acceptance criterion\n                 b) Is correct. This acceptance criterion describes an example scenario that\n                    must be realized by the system. This is an example of a scenario-\n                    oriented acceptance criterion\n                 c) Is not correct. This sentence looks more like a line of code that\n                    implements some business rule. Acceptance criteria should be written in\n                    collaboration with business representatives, and therefore should be\n                    written in language they understand. This sentence will most likely be\n                    unintelligible to these stakeholders\n                 d) Is not correct. This acceptance criterion describes what rules or\n                    regulations the system must adhere to and how compliance will be\n                    ensured. Therefore, this is an example of a rule-oriented acceptance\n                    criterion, not a scenario-based acceptance criterion",
    "lo": "FL-4.5.2",
    "kLevel": "K2"
  },
  {
    "set": "C",
    "number": "29",
    "id": "C-29",
    "points": "1 Point",
    "stem": "You are using acceptance test-driven development and designing test cases based on the\nfollowing user story:\n\nAs a Regular or Special user, I want to be able to use my electronic floor card, to access specific\nfloors.\n\nAcceptance Criteria:\n\nAC1: Regular users have access to floors 1 to 3\nAC2: Floor 4 is only accessible to Special users\nAC3: Special users have all the access rights of Regular users\n\nWhich test case is the MOST reasonable one to test AC3?",
    "options": [
      {
        "id": "a",
        "text": "Check that a Regular user can access floors 1 and 3"
      },
      {
        "id": "b",
        "text": "Check that a Regular user cannot access floor 4"
      },
      {
        "id": "c",
        "text": "Check that a Special user can access floor 5"
      },
      {
        "id": "d",
        "text": "Check that a Special user can access floors 1, 2 and 3"
      }
    ],
    "selectCount": 1,
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. We want to check that Special users have the rights of\n                    Regular users, so we need to test access rights for a Special user, not\n                    for a Regular user\n                 b) Is not correct. We want to check that Special users have the rights of\n                    Regular users, so we need to test access rights for a Special user, not\n                    for a Regular user\n                 c) Is not correct. There is no floor 5 described in the acceptance criteria.\n                    The test cases should not extend the scope of the user story. But even\n                    if we would like to perform negative testing, this test is not directly\n                    related to AC3\n                 d) Is correct. This is the way we can check if a Special user can access\n                    floors which are accessible to a Regular user\n\nQuestion Correct                            Explanation / Rationale                                   Learning    K-Level   Number\nNumber Answer                                                                                         Objective                of\n  (#)                                                                                                   (LO)                 Points",
    "lo": "FL-4.5.3",
    "kLevel": "K3"
  },
  {
    "set": "C",
    "number": "30",
    "id": "C-30",
    "points": "1 Point",
    "stem": "Which of the following is NOT a purpose of a test plan?",
    "options": [
      {
        "id": "a",
        "text": "To define test data and expected results for component tests and component integration tests"
      },
      {
        "id": "b",
        "text": "To define as exit criteria from the component test level that “100% statement coverage and 100% branch coverage must be achieved”"
      },
      {
        "id": "c",
        "text": "To describe what fields the test progress report shall contain and what should be the form of this report"
      },
      {
        "id": "d",
        "text": "To explain why system integration testing will be excluded from testing, although the test strategy requires this test level"
      }
    ],
    "selectCount": 1,
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. The test plan may include test data requirements (as part of\n                    the test approach), but not the detailed test data for test cases. Test\n                    data is part of the test cases, not the test plan. Also, it is usually\n                    impossible to define such data when the test plan is created, because it\n                    is not exactly known what the components will look like\n                 b) Is not correct. One of the purposes of a test plan is to help ensure that\n                    test activities will meet the established criteria, by including entry criteria\n                    and exit criteria. The code coverage criteria are an example of such\n                    criteria for the component test level\n                 c) Is not correct. Documentation templates are typical content of a test\n                    plan. This helps to facilitate communication between the stakeholders\n                    by defining a standard way of communicating or reporting\n                 d) Is not correct. One of the purposes of a test plan is to demonstrate that\n                    testing will adhere to the existing test policy and test strategy, or to\n                    explain why the testing will deviate from them. This is an example of\n                    explaining the deviation, regarding the test levels that will be (or will not\n                    be) followed",
    "lo": "FL-5.1.1",
    "kLevel": "K2"
  },
  {
    "set": "C",
    "number": "31",
    "id": "C-31",
    "points": "1 Point",
    "stem": "At the beginning of each iteration, the team estimates the amount of work (in person-days) they will\nneed to complete during the iteration. Let E(n) be the estimated amount of work for iteration n, and\nlet A(n) be the actual amount of work done in iteration n. From the third iteration, the team uses the\nfollowing estimation model based on extrapolation:\n\n                                                                  3 ∗ 𝐴(𝑛 − 1) + 𝐴(𝑛 − 2)\n                                                         𝐸(𝑛) =\n                                                                             4\n\nThe graph shows the estimated and actual amount of work for the first four iterations.\n\n                                          Estimated and actual effort (in person-days)\n                    13\n                    12\n                    11\n                    10\n                     9\n                     8\n                     7\n                     6\n                     5\n                     4\n                     3\n                     2\n                     1\n                     0\n                                   Iteration #1            Iteration #2          Iteration #3   Iteration #4\n\n                                                                   Estimated   Actual\n\nWhat is the estimated amount of work for iteration #5?",
    "options": [
      {
        "id": "a",
        "text": "10.5 person-days"
      },
      {
        "id": "b",
        "text": "8.25 person-days"
      },
      {
        "id": "c",
        "text": "6.5 person-days"
      },
      {
        "id": "d",
        "text": "9.4 person-days"
      }
    ],
    "selectCount": 1,
    "correct": [
      "c"
    ],
    "explanation": "From the graph we have:\n                            A(4)=6 and A(3)=8 (the last two gray boxes).\n                 From the formula we obtain:\n                            E(5) = (3*A(4) + A(3)) / 4 = (3*6+8) / 4 = 26 / 4 = 6.5 person-days.\n\n                                         Thus:\n                                         a) Is not correct\n                                         b) Is not correct\n                                         c) Is correct\n                                         d) Is not correct\n\nQuestion Correct                             Explanation / Rationale                                                 Learning    K-Level   Number\nNumber Answer                                                                                                        Objective                of\n  (#)                                                                                                                  (LO)                 Points",
    "lo": "FL-5.1.4",
    "kLevel": "K3"
  },
  {
    "set": "C",
    "number": "32",
    "id": "C-32",
    "points": "1 Point",
    "stem": "You are preparing a test execution schedule for executing seven test cases TC 1 to TC 7.\n\nThe following figure includes the priorities of these test cases (1=highest priority, 3 = lowest\npriority).\n\nThe figure also shows the dependencies between test cases using arrows. For instance, the arrow\nfrom TC 4 to TC 5 means that TC 5 can only be executed if TC 4 was previously executed.\n\nWhich test case should be executed sixth?",
    "options": [
      {
        "id": "a",
        "text": "TC 3"
      },
      {
        "id": "b",
        "text": "TC 5"
      },
      {
        "id": "c",
        "text": "TC 6"
      },
      {
        "id": "d",
        "text": "TC 2"
      }
    ],
    "selectCount": 1,
    "correct": [
      "a"
    ],
    "explanation": "We want to run test cases according to their priorities, but we also need to\n                 consider the dependencies.\n                 If we only consider priorities, we want to first run TC 5 and TC 7 (highest\n                 priority), then TC 1, TC 3, and TC 4, and finally TC 2 and TC 6 (lowest\n                 priority).\n                 However, in order to run TC 7, we need to first run TC 4.\n                 In order to run TC 5, we need to run TC 4 and TC 2, but TC 2 is blocked by\n                 TC 1, which should be run prior to TC 2.\n                 So, in order to run priority 1 test cases as early as possible, the first five test\n                 cases should be: TC 4 - TC 7 - TC 1 - TC 2 - TC 5.\n                 Next, we need to run TC 3, because it has higher priority than TC 6.\n                 Thus the full schedule will be TC 4 – TC 7 – TC 1 – TC 2 – TC 5 – TC 3 –\n                 TC 6.\n                 So, the sixth test case will be TC 3.\n\n                                         Thus:\n                                         a) Is correct\n                                         b) Is not correct\n                                         c) Is not correct\n                                         d) Is not correct",
    "lo": "FL-5.1.5",
    "kLevel": "K3"
  },
  {
    "set": "C",
    "number": "33",
    "id": "C-33",
    "points": "1 Point",
    "stem": "What does the test pyramid model show?",
    "options": [
      {
        "id": "a",
        "text": "That tests may have different priorities"
      },
      {
        "id": "b",
        "text": "That tests may have different granularity"
      },
      {
        "id": "c",
        "text": "That tests may require different coverage criteria"
      },
      {
        "id": "d",
        "text": "That tests may depend on other tests"
      }
    ],
    "selectCount": 1,
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. The test pyramid model does not provide information\n                                            about test priorities\n                                         b) Is correct. The test pyramid model shows that different tests have\n                                            different levels of granularity\n                                         c) Is not correct. The test pyramid model is independent of coverage\n                                            criteria\n                                         d) Is not correct. Test pyramid model does not show any relations between\n                                            different tests\n\nQuestion Correct                                                   Explanation / Rationale                               Learning    K-Level   Number\nNumber Answer                                                                                                            Objective                of\n  (#)                                                                                                                      (LO)                 Points",
    "lo": "FL-5.1.6",
    "kLevel": "K1"
  },
  {
    "set": "C",
    "number": "34",
    "id": "C-34",
    "points": "1 Point",
    "stem": "What is the relationship between the testing quadrants, test levels and test types?",
    "options": [
      {
        "id": "a",
        "text": "Testing quadrants represent particular combinations of test levels and test types, defining their location in the software development lifecycle"
      },
      {
        "id": "b",
        "text": "Testing quadrants describe the degree of granularity of individual test types performed at each test level"
      },
      {
        "id": "c",
        "text": "Testing quadrants assign the test types that can be performed to the test levels"
      },
      {
        "id": "d",
        "text": "Testing quadrants group test levels and test types by several criteria such as targeting specific stakeholders"
      }
    ],
    "selectCount": 1,
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. Testing quadrants group test levels and test types\n                                             separately according to several criteria. They do not represent any\n                                             combinations of test levels and test types and they are not related to\n                                             any location within a software development lifecycle. Both test levels\n                                             and test types are treated separately in the testing quadrants model\n                                         b) Is not correct. Testing quadrants group test levels and test types\n                                             according to several criteria. They do not describe the degree of\n                                             granularity of individual test types performed at each test level. Such a\n                                             model, regarding the test levels, is called the test pyramid\n                                         c) Is not correct. The statement is wrong, because in general any test type\n                                             can be performed at any test level\n                                         d) Is correct. The testing quadrants group test levels, test types, test\n                                             activities, test techniques and work products in Agile software\n                                             development. In this model, tests can be business facing or technology\n                                             facing. Tests can support the team (i.e., guide the development) or\n                                             critique the product (i.e., measure its behavior against expectations).\n                                             The combination of these two viewpoints determines the four quadrants",
    "lo": "FL-5.1.7",
    "kLevel": "K2"
  },
  {
    "set": "C",
    "number": "35",
    "id": "C-35",
    "points": "1 Point",
    "stem": "Which of the following is an example of how product risk analysis may influence the thoroughness\nand scope of testing?",
    "options": [
      {
        "id": "a",
        "text": "Continuous risk monitoring allows us to identify an emerging risk as soon as possible"
      },
      {
        "id": "b",
        "text": "Risk identification allows us to implement risk mitigation activities and reduce the risk level"
      },
      {
        "id": "c",
        "text": "The assessed risk level helps us to select the rigor of testing"
      },
      {
        "id": "d",
        "text": "Risk analysis allows us to derive coverage items"
      }
    ],
    "selectCount": 1,
    "correct": [
      "c"
    ],
    "explanation": "a) Is not correct. Risk monitoring is part of risk control, not risk analysis\n                                         b) Is not correct. Risk identification itself does not allow us to implement\n                                            risk mitigation activities. The mitigating actions are defined during the\n                                            risk control phase\n                                         c) Is correct. This is an example of how risk analysis influences the\n                                            thoroughness and scope of testing\n                                         d) Is not correct. Coverage items are derived using test techniques, not\n                                            through risk analysis\n\nQuestion Correct                            Explanation / Rationale                               Learning    K-Level   Number\nNumber Answer                                                                                     Objective                of\n  (#)                                                                                               (LO)                 Points",
    "lo": "FL-5.2.3",
    "kLevel": "K2"
  },
  {
    "set": "C",
    "number": "36",
    "id": "C-36",
    "points": "1 Point",
    "stem": "Which of the following activities in the test process makes the MOST use of test progress reports?",
    "options": [
      {
        "id": "a",
        "text": "Test design"
      },
      {
        "id": "b",
        "text": "Test completion"
      },
      {
        "id": "c",
        "text": "Test analysis"
      },
      {
        "id": "d",
        "text": "Test planning"
      }
    ],
    "selectCount": 1,
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. Test progress reports are mostly used during test\n                    monitoring and test control, and test completion, not during test design\n                 b) Is correct. A test completion report is prepared during test completion,\n                    when a project, test level, or test type is complete and when, ideally, its\n                    exit criteria have been met. This report uses information from test\n                    progress reports and other data\n                 c) Is not correct. Test progress reports are mostly used during test\n                    monitoring and test control, and test completion, not during test analysis\n                 d) Is not correct. Test progress reports are most used during test\n                    monitoring and test control, and test completion, not during test planning",
    "lo": "FL-5.3.2",
    "kLevel": "K2"
  },
  {
    "set": "C",
    "number": "37",
    "id": "C-37",
    "points": "1 Point",
    "stem": "Which of the following is NOT an example of how configuration management supports testing?",
    "options": [
      {
        "id": "a",
        "text": "All commits to the repository are uniquely identified and version controlled"
      },
      {
        "id": "b",
        "text": "All changes in the test environment elements are tracked"
      },
      {
        "id": "c",
        "text": "All requirement specifications are referenced unambiguously in test plans"
      },
      {
        "id": "d",
        "text": "All identified defects have an assigned status"
      }
    ],
    "selectCount": 1,
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. When a user reports a software failure, thanks to the\n                    unique identification of commits, it is possible to reassemble the files\n                    from the software version which was used by the user (as well as the\n                    corresponding versions of the test scripts) and thus reproduce the\n                    failure and locate the defect faster\n                 b) Is not correct. If a change to the test environment causes unexpected\n                    issues during testing, configuration management allows testers to roll\n                    back to a previous version of the environment. This ensures that testing\n                    can continue without being affected by the change\n                 c) Is not correct. Configuration management ensures that all identified\n                    documentation (e.g., requirement specifications) and software items are\n                    referenced unambiguously in test documentation (e.g., test plans)\n                 d) Is correct. This is ensured by defect management, not by the\n                    configuration management process\n\nQuestion Correct                             Explanation / Rationale                               Learning    K-Level   Number\nNumber Answer                                                                                      Objective                of\n  (#)                                                                                                (LO)                 Points",
    "lo": "FL-5.4.1",
    "kLevel": "K2"
  },
  {
    "set": "C",
    "number": "38",
    "id": "C-38",
    "points": "1 Point",
    "stem": "Consider the following defect report for a web-based shopping application:\n\nApplication: WebShop v0.99\n\nDefect: Login button not working\n\nSteps to Reproduce:\n\nLaunch the website\nClick on the login button\n\nExpected result: The user should be redirected to the login page.\nActual result: The login button does not respond when clicked.\n\nSeverity: High\nPriority: Urgent\n\nWhat is the MOST important information that is missing from this defect report?",
    "options": [
      {
        "id": "a",
        "text": "Name of the tester and date"
      },
      {
        "id": "b",
        "text": "Test environment elements and their version numbers"
      },
      {
        "id": "c",
        "text": "Identification of the test object"
      },
      {
        "id": "d",
        "text": "Impact on the interests of stakeholders"
      }
    ],
    "selectCount": 1,
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. This is important, but not as important as test\n                    environment elements\n                 b) Is correct. The important thing that is missing is the identification of the\n                    browser and device used for the testing. The browser and device\n                    information are important because such a defect can be browser- or\n                    device-specific. For example, a login button may work fine on one\n                    browser (or one version of a specific browser) but not on another.\n                    Therefore, the browser and device information can help the developers\n                    to reproduce the issue and find the root cause of the problem more\n                    quickly\n                 c) Is not correct. The test object is identified (WebShop v0.99)\n                 d) Is not correct. The impact is included – this is severity (high)",
    "lo": "FL-5.5.1",
    "kLevel": "K3"
  },
  {
    "set": "C",
    "number": "39",
    "id": "C-39",
    "points": "1 Point",
    "stem": "Tools from which of the following categories help with the organization of test cases, detected\ndefects and configuration management?",
    "options": [
      {
        "id": "a",
        "text": "Test execution and coverage tools"
      },
      {
        "id": "b",
        "text": "Test design and implementation tools"
      },
      {
        "id": "c",
        "text": "Defect management tools"
      },
      {
        "id": "d",
        "text": "Test management tools"
      }
    ],
    "selectCount": 1,
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. Test execution and coverage tools facilitate the\n                    automated execution of test cases and the measurement of the\n                    coverage achieved by running those test cases. However, these tools\n                    do not help with the organization of defects and configuration\n                    management\n                 b) Is not correct. Test design and test implementation tools facilitate the\n                    generation of test cases, test data and test procedures, but they do not\n                    help with the organization of defects and configuration management\n                 c) Is not correct. Defect management tools are used to manage defects\n                    but are not testing tools and are not used to organize test cases or\n                    configuration management\n                 d) Is correct. Test management tools increase the test process efficiency\n                    by facilitating the management of the software development lifecycle\n                    (SDLC), requirements, tests, defects, and configuration management\n\nQuestion Correct                            Explanation / Rationale                               Learning    K-Level   Number\nNumber Answer                                                                                     Objective                of\n  (#)                                                                                               (LO)                 Points",
    "lo": "FL-6.1.1",
    "kLevel": "K2"
  },
  {
    "set": "C",
    "number": "40",
    "id": "C-40",
    "points": "1 Point",
    "stem": "Which of the following is MOST likely to be a benefit of test automation?",
    "options": [
      {
        "id": "a",
        "text": "The capability of generating test cases without access to the test basis"
      },
      {
        "id": "b",
        "text": "The achievement of increased coverage through more objective assessment"
      },
      {
        "id": "c",
        "text": "The increase in test execution times available with higher processing power"
      },
      {
        "id": "d",
        "text": "The prevention of human errors through greater consistency and repeatability"
      }
    ],
    "selectCount": 1,
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. ‘The capability of generating test cases without access to\n                    the test basis’ is not possible. The generation of test cases by either\n                    testers or tools requires access to the test basis\n                 b) Is not correct. ‘The achievement of increased coverage through more\n                    objective assessment’ is not a direct benefit of test automation. Test\n                    automation will provide more objective assessment of coverage,\n                    however that objective assessment will not increase the coverage. Only\n                    by using the results of the coverage to write further test cases can the\n                    coverage possibly be increased\n                 c) Is not correct. ‘The increase in test execution times available with higher\n                    processing power’ is a contradictory statement as higher processing\n                    power would normally reduce execution times, and increased execution\n                    times are not a benefit as the testing would take longer\n                 d) Is correct. The prevention of human errors through greater consistency\n                    and repeatability is a benefit of test automation as test automation\n                    cannot suffer from human errors. For instance, it means that tests are\n                    consistently derived from requirements, test data is created in a\n                    systematic manner, and tests are executed by a tool in the same order\n                    with the same frequency",
    "lo": "FL-6.2.1",
    "kLevel": "K1"
  },
  {
    "set": "D",
    "number": "1",
    "id": "D-1",
    "points": "1 Point",
    "stem": "Which of the following is a typical test objective?",
    "options": [
      {
        "id": "a",
        "text": "Finding and fixing defects in the test object"
      },
      {
        "id": "b",
        "text": "Maintaining effective communications with developers"
      },
      {
        "id": "c",
        "text": "Validating that legal requirements have been met"
      },
      {
        "id": "d",
        "text": "Building confidence in the quality of the test object"
      }
    ],
    "selectCount": 1,
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. Finding and fixing defects in the test object is not a typical\n                    test objective as although identifying defects is an objective of testing,\n                    fixing defects is not a test activity\n                 b) Is not correct. Maintaining effective communications with developers is\n                    not a typical test objective although it is useful in achieving other\n                    objectives of testing, such as providing stakeholders with information\n                    that enables them to make informed decisions. It is not a primary reason\n                    for performing testing\n                 c) Is not correct. Validating that legal requirements have been met is not a\n                    typical test objective because validation is concerned with checking\n                    whether the system meets users’ and other stakeholders’ needs in its\n                    operational environment. Checking that legal requirements have been\n                    met is a form of verification\n                 d) Is correct. Building confidence in the quality of the test object is\n                    achieved by executing tests that passed",
    "lo": "FL-1.1.1",
    "kLevel": "K1"
  },
  {
    "set": "D",
    "number": "2",
    "id": "D-2",
    "points": "1 Point",
    "stem": "A designer documents a design for a user interface that does not suitably address disabled users\nbecause the designer is tired. The programmer implements the user interface in line with the\ndesign but as they are working under severe time pressure, they do not include suitable exception\nhandling in their program code for bonus calculations. When the operational system is used,\ncomplaints are made by some disabled users about the interface and the company is subsequently\nfined by the relevant regulatory authority. No one notices that bonus calculations are sometimes\nincorrect.\n\nWhich of the following statements is CORRECT?",
    "options": [
      {
        "id": "a",
        "text": "The miscalculation of bonuses is a defect that occasionally occurs"
      },
      {
        "id": "b",
        "text": "The fine received for failing to address some disabled users is a failure"
      },
      {
        "id": "c",
        "text": "The programmer working under severe time pressure is a root cause"
      },
      {
        "id": "d",
        "text": "The design of the user interface includes a designer error"
      }
    ],
    "selectCount": 1,
    "correct": [
      "c"
    ],
    "explanation": "a) Is not correct. The miscalculation of bonuses is a failure by the system,\n                    not a defect\n                 b) Is not correct. The system not suitably supporting disabled users is a\n                    failure which eventually results in a fine, but the fine itself is not a failure\n                    (it appears to be the correct functioning of the regulatory system)\n                 c) Is correct. The error is made by the programmer and this mistake is\n                    caused by them working under severe time pressure, which is the root\n                    cause of the subsequent defect\n                 d) Is not correct. The poor design of the user interface, which does not\n                    suitably address disabled users, is a design defect caused by the\n                    designer error. Thus the design of the user interface includes a design\n                    defect not a designer error\n\nQuestion Correct                            Explanation / Rationale                                 Learning    K-Level   Number\nNumber Answer                                                                                       Objective                of\n  (#)                                                                                                 (LO)                 Points",
    "lo": "FL-1.2.3",
    "kLevel": "K2"
  },
  {
    "set": "D",
    "number": "3",
    "id": "D-3",
    "points": "1 Point",
    "stem": "Test conditions are being used by testers to generate test cases and execute tests. Even though\nthe test conditions remain the same, the test cases are varied each time. Which of the following\n‘principles of testing’ is being addressed through the variation of test cases?",
    "options": [
      {
        "id": "a",
        "text": "Tests wear out"
      },
      {
        "id": "b",
        "text": "Absence-of-defects fallacy"
      },
      {
        "id": "c",
        "text": "Early testing saves time and money"
      },
      {
        "id": "d",
        "text": "Defects cluster together"
      }
    ],
    "selectCount": 1,
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. The ‘tests wear out’ principle is concerned with the idea that\n                    repeating identical tests on unaltered code is unlikely to uncover novel\n                    defects and therefore, modifying tests may be essential. By using test\n                    conditions to generate new tests each time, the tests will not be identical\n                    and the risk of the tests wearing out is reduced\n                 b) Is not correct. The ‘absence-of-defects fallacy’ principle is concerned\n                    with ensuring that users’ needs are fulfilled even if lots of testing is done\n                    and no defects are found (i.e., validation is also necessary). The use of\n                    test conditions to generate test cases and execute tests does not\n                    directly address this concern\n                 c) Is not correct. The ‘early testing saves time and money’ principle is\n                    concerned with fixing defects early on to prevent the occurrence of\n                    subsequent defects in derived work products, thereby reducing costs\n                    and the likelihood of failures. This is typically addressed by starting\n                    testing (both static and dynamic) as early as possible, but this is not\n                    addressed by using test conditions to generate test cases and execute\n                    tests\n                 d) Is not correct. The ‘Defects cluster together’ principle is concerned with\n                    the distribution of defects in a system, which typically follows a Pareto\n                    distribution. The use of test conditions to generate test cases and\n                    execute tests does not address this concern, which is typically\n                    addressed by risk-based testing\n\nQuestion Correct                             Explanation / Rationale                               Learning    K-Level   Number\nNumber Answer                                                                                      Objective                of\n  (#)                                                                                                (LO)                 Points",
    "lo": "FL-1.3.1",
    "kLevel": "K2"
  },
  {
    "set": "D",
    "number": "4",
    "id": "D-4",
    "points": "1 Point",
    "stem": "Given the following test tasks:\n           1. Derive test cases from test conditions\n           2. Identify reusable testware\n           3. Organize test cases into test procedures\n           4. Evaluate the test basis and the test object\n\nAnd the following test activities:\n           A. Test analysis\n           B. Test design\n           C. Test implementation\n           D. Test completion\n\nWhich of the following BEST matches the tasks with the activities?",
    "options": [
      {
        "id": "a",
        "text": "1B, 2A, 3D, 4C"
      },
      {
        "id": "b",
        "text": "1B, 2D, 3C, 4A"
      },
      {
        "id": "c",
        "text": "1C, 2A, 3B, 4D"
      },
      {
        "id": "d",
        "text": "1C, 2D, 3A, 4B"
      }
    ],
    "selectCount": 1,
    "correct": [
      "b"
    ],
    "explanation": "Considering each of the listed test activities and their tasks:\n                       A. Test analysis - To identify the features that require testing, the\n                           test basis is analyzed and defined as test conditions, which are\n                           then prioritized along with related risks. During this test analysis,\n                           defects in the test basis are typically uncovered, and the test\n                           object's testability may also be assessed. (Task 4)\n                       B. Test design - Involves using test conditions to create test cases\n                           and other necessary testware, such as test data requirements\n                           and test charters for exploratory testing. (Task 1)\n                       C. Test implementation - Test procedures, such as manual and\n                           automated test scripts, are created from test cases and may be\n                           assembled into test suites. Test procedures are prioritized and\n                           arranged in a test execution schedule. (Task 3)\n                       D. Test completion - Occurs at project milestones, such as release,\n                           end of iteration or end of test level. Testware is identified and\n                           archived or handed to the appropriate teams for reuse, the test\n                           environment is shut down, and the test activities are analyzed for\n                           lessons learned and future improvements. (Task 2)\n\n                                         Thus:\n                                         a) Is not correct\n                                         b) Is correct. The CORRECT match is: 1B, 2D, 3C, 4A\n                                         c) Is not correct\n                                         d) Is not correct\n\nQuestion Correct                            Explanation / Rationale                                                      Learning    K-Level   Number\nNumber Answer                                                                                                            Objective                of\n  (#)                                                                                                                      (LO)                 Points",
    "lo": "FL-1.4.1",
    "kLevel": "K2"
  },
  {
    "set": "D",
    "number": "5",
    "id": "D-5",
    "points": "1 Point",
    "stem": "Given the following testware:\n          i.   Test completion report\n         ii.   Data held in a database used for test inputs and expected results\n        iii.   The list of elements needed to build the test environment\n        iv.    Documented sequences of test cases in execution order\n         v.    Test cases\n\nWhich of the following BEST shows the testware produced as a result of performing test\nimplementation?",
    "options": [
      {
        "id": "a",
        "text": "ii, iv"
      },
      {
        "id": "b",
        "text": "iii, v"
      },
      {
        "id": "c",
        "text": "i, ii, v"
      },
      {
        "id": "d",
        "text": "i, iii, iv"
      }
    ],
    "selectCount": 1,
    "correct": [
      "a"
    ],
    "explanation": "Considering each of the listed testware, and the test activity that produces\n                 it:\n                      i. The test completion report is an output of test completion\n                      ii. Data held in a database used for inputs and expected results is\n                           the test data - output of test implementation\n                      iii. The list of elements needed to build the test environment is the\n                           test environment requirements - output of test design\n                      iv. Documented sequences of test cases in execution order are the\n                           test procedures - output of test implementation\n                      v. Test cases - output of test design\n\n                                         Test implementation produces the following outputs: test procedures (iv),\n                                         automated test scripts, test suites, test data (ii), test execution schedule,\n                                         and test environment elements such as stubs, drivers, simulators, and\n                                         service virtualizations.\n\n                                         Thus:\n                                         a) Is correct. Items ii and iv in the list are produced as a result of test\n                                            implementation\n                                         b) Is not correct\n                                         c) Is not correct\n                                         d) Is not correct\n\nQuestion Correct                              Explanation / Rationale                                 Learning    K-Level   Number\nNumber Answer                                                                                         Objective                of\n  (#)                                                                                                   (LO)                 Points",
    "lo": "FL-1.4.3",
    "kLevel": "K2"
  },
  {
    "set": "D",
    "number": "6",
    "id": "D-6",
    "points": "1 Point",
    "stem": "Which of the following is MOST likely to describe a task performed by someone in a test\nmanagement role?",
    "options": [
      {
        "id": "a",
        "text": "Evaluate the test basis and the test object"
      },
      {
        "id": "b",
        "text": "Define test environment requirements"
      },
      {
        "id": "c",
        "text": "Assess testability of the test object"
      },
      {
        "id": "d",
        "text": "Create the test completion report"
      }
    ],
    "selectCount": 1,
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. The testing role is primarily responsible for the technical\n                    and engineering aspects of testing, such as test analysis, test design,\n                    test implementation, and test execution. Evaluating the test basis for\n                    defects and the test object for testability are tasks performed as part of\n                    test analysis, so it is likely they are tasks performed by the testing role\n                 b) Is not correct. The testing role is primarily responsible for the technical\n                    and engineering aspects of testing, such as test analysis, test design,\n                    test implementation, and test execution. Defining the test environment\n                    requirements is a task performed as part of test design, so it is likely to\n                    be a task performed by the testing role\n                 c) Is not correct. The testing role is primarily responsible for the technical\n                    and engineering aspects of testing, such as test analysis, test design,\n                    test implementation, and test execution. Assessing the testability of a\n                    test object is a task performed as part of test analysis, so it is likely to be\n                    a task performed by the testing role\n                 d) Is correct. The test management role primarily involves activities related\n                    to test planning, test monitoring and test control, and test completion.\n                    Thus, creating the test completion report, which is the prime output from\n                    the test completion, is likely to be a task performed by the test\n                    management role\n\nQuestion Correct                            Explanation / Rationale                            Learning    K-Level   Number\nNumber Answer                                                                                  Objective                of\n  (#)                                                                                            (LO)                 Points",
    "lo": "FL-1.4.5",
    "kLevel": "K2"
  },
  {
    "set": "D",
    "number": "7",
    "id": "D-7",
    "points": "1 Point",
    "stem": "Which of the following is an advantage of the whole team approach?",
    "options": [
      {
        "id": "a",
        "text": "Improved communication between team members"
      },
      {
        "id": "b",
        "text": "Decreased individual accountability for quality"
      },
      {
        "id": "c",
        "text": "Faster deployment of deliverables to the end users"
      },
      {
        "id": "d",
        "text": "Reduced collaboration with external business users"
      }
    ],
    "selectCount": 1,
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. The whole team approach promotes robust communication\n                    and collaboration between the team members\n                 b) Is not correct. While the whole team approach prioritizes collective\n                    accountability for quality, each individual team member is still equally\n                    accountable for quality\n                 c) Is not correct. The whole team approach is about how the team works\n                    together, with the aim of higher quality deliverables, but it does not\n                    necessarily result in faster deployment to end users\n                 d) Is not correct. When using the whole team approach, testers work with\n                    business representatives to create acceptance tests. There is no\n                    suggestion that the approach will reduce collaboration with external\n                    business users\n\nQuestion Correct                              Explanation / Rationale                                    Learning    K-Level   Number\nNumber Answer                                                                                            Objective                of\n  (#)                                                                                                      (LO)                 Points",
    "lo": "FL-1.5.2",
    "kLevel": "K1"
  },
  {
    "set": "D",
    "number": "8",
    "id": "D-8",
    "points": "1 Point",
    "stem": "Given the following benefits and drawbacks of the independence of testing:\n          i.   The testers work in a different location from the developers\n         ii.   Testers question the assumptions programmers make while writing code\n        iii.   A confrontational dynamic has been established between testers and developers\n        iv.    Developers have convinced themselves that testers are mostly accountable for\n               quality\n         v.    Testers have different biases than those held by the developers\n\nWhich are MOST likely to be considered benefits?",
    "options": [
      {
        "id": "a",
        "text": "i, iv"
      },
      {
        "id": "b",
        "text": "ii, v"
      },
      {
        "id": "c",
        "text": "i, iii, iv"
      },
      {
        "id": "d",
        "text": "ii, iii, v"
      }
    ],
    "selectCount": 1,
    "correct": [
      "b"
    ],
    "explanation": "Considering each of the listed benefits and drawbacks of the independence\n                 of testing:\n                       i.    Ideally, we want close collaboration between testers and\n                             developers, which is not increased by isolation. Thus, this is a\n                             disadvantage\n                      ii.    Testers and developers have varied backgrounds, technical\n                             viewpoints, and potential biases, allowing testers to usefully\n                             challenge assumptions made by stakeholders during system\n                             specification and implementation. Thus, this is an advantage\n                     iii.    The main disadvantage of independence of testing is that testers\n                             may become isolated from the development team, leading to\n                             communication problems, a lack of collaboration, and potentially\n                             an adversarial relationship, with testers being blamed for delays\n                             and bottlenecks in the release process. Thus, this is a\n                             disadvantage\n                     iv.     One of the disadvantages of independence of testing is that\n                             testers may become isolated from the development team, leading\n                             to developers feeling less accountable for quality. Thus, this is a\n                             disadvantage\n                      v.     The primary benefit of independence of testing is that testers are\n                             more likely to identify different types of failures and defects\n                             compared to developers, due to their varied backgrounds,\n                             technical viewpoints, and potential biases, including cognitive bias\n\n                                         Thus:\n                                         a) Is not correct\n                                         b) Is correct. The list entries showing benefits are ii and v\n                                         c) Is not correct\n                                         d) Is not correct\n\nQuestion Correct                            Explanation / Rationale                               Learning    K-Level   Number\nNumber Answer                                                                                     Objective                of\n  (#)                                                                                               (LO)                 Points",
    "lo": "FL-1.5.3",
    "kLevel": "K2"
  },
  {
    "set": "D",
    "number": "9",
    "id": "D-9",
    "points": "1 Point",
    "stem": "Which of the following is a good testing practice that applies to all software development lifecycles?",
    "options": [
      {
        "id": "a",
        "text": "Each test level has specific and distinct test objectives"
      },
      {
        "id": "b",
        "text": "Test implementation and execution for a given test level should start during the corresponding development phase"
      },
      {
        "id": "c",
        "text": "Testers should start test design as soon as drafts of the relevant work products become available"
      },
      {
        "id": "d",
        "text": "Every dynamic testing activity has a corresponding static testing activity"
      }
    ],
    "selectCount": 1,
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. Each test level has specific and distinct test objectives as a\n                    different form of test object (e.g., single component and complete\n                    system) is tested at each test level and overlapping test objectives\n                    would lead to unnecessary duplication\n                 b) Is not correct. Test analysis and test design for a given test level should\n                    start during the corresponding development phase to facilitate early\n                    testing (e.g., acceptance test analysis and test design should begin\n                    during requirements analysis). Test implementation will generally start\n                    later, and test execution will start during the test level\n                 c) Is not correct. Test design for a given test level should start during the\n                    corresponding development phase to facilitate early testing, however\n                    test design (e.g., test case generation) needs to be based on an agreed\n                    test basis, not an early draft, otherwise significant test effort may be\n                    wasted on creating test cases for a design that later changes\n                 d) Is not correct. Quality control applies to all development activities,\n                    meaning that every software development activity has a corresponding\n                    test activity. However, the same symmetry does not apply to dynamic\n                    testing and static testing. There are some static testing activities (e.g.,\n                    static analysis) for which there is no obvious corresponding dynamic\n                    testing activity",
    "lo": "FL-2.1.2",
    "kLevel": "K1"
  },
  {
    "set": "D",
    "number": "10",
    "id": "D-10",
    "points": "1 Point",
    "stem": "Which of the following is an example of a test-first approach to development?",
    "options": [
      {
        "id": "a",
        "text": "Behavior-Driven Development"
      },
      {
        "id": "b",
        "text": "Test Level Driven Development"
      },
      {
        "id": "c",
        "text": "Function-Driven Development"
      },
      {
        "id": "d",
        "text": "Performance-Driven Development"
      }
    ],
    "selectCount": 1,
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. Behavior-Driven Development (BDD) is a well-known\n                    example of a test-first approach to development\n                 b) Is not correct. Test Level Driven Development is not a correct example\n                    of a test-first approach to development\n                 c) Is not correct. Function-Driven Development is not a correct example of\n                    a test-first approach to development\n                 d) Is not correct. Performance-Driven Development is not a correct\n                    example of a test-first approach to development\n\nQuestion Correct                           Explanation / Rationale                                Learning    K-Level   Number\nNumber Answer                                                                                     Objective                of\n  (#)                                                                                               (LO)                 Points",
    "lo": "FL-2.1.3",
    "kLevel": "K1"
  },
  {
    "set": "D",
    "number": "11",
    "id": "D-11",
    "points": "1 Point",
    "stem": "Which of the following is MOST likely to be a challenge encountered when implementing DevOps?",
    "options": [
      {
        "id": "a",
        "text": "Making sure that non-functional quality characteristics are not overlooked"
      },
      {
        "id": "b",
        "text": "Managing continuously changing test environments"
      },
      {
        "id": "c",
        "text": "The need for more manual testers with suitable experience"
      },
      {
        "id": "d",
        "text": "Setting up the test automation as part of the delivery pipeline"
      }
    ],
    "selectCount": 1,
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. DevOps generally increases the visibility of non-functional\n                    quality characteristics, such as performance and reliability\n                 b) Is not correct. Automated processes like continuous\n                    integration/continuous delivery (CI/CD) used in DevOps facilitate stable\n                    test environments\n                 c) Is not correct. Automated processes like CI/CD used in DevOps\n                    generally reduce the need for manual testing\n                 d) Is correct. DevOps implementation can pose several risks and\n                    challenges, including the need to define and set up the delivery pipeline,\n                    introduce and maintain CI/CD tools, and establish and maintain test\n                    automation\n\nQuestion Correct                            Explanation / Rationale                                Learning    K-Level   Number\nNumber Answer                                                                                      Objective                of\n  (#)                                                                                                (LO)                 Points",
    "lo": "FL-2.1.4",
    "kLevel": "K2"
  },
  {
    "set": "D",
    "number": "12",
    "id": "D-12",
    "points": "1 Point",
    "stem": "Which of the following BEST describes retrospectives?",
    "options": [
      {
        "id": "a",
        "text": "Retrospectives allow team members to identify other team members who did not fully contribute to achieving quality as required by the whole team approach"
      },
      {
        "id": "b",
        "text": "Retrospectives give testers an opportunity to identify activities that were successful so that these are retained when potential improvements are made in the future"
      },
      {
        "id": "c",
        "text": "Retrospectives are where agile team members are allowed to voice their concerns about management and customers in a blameless environment"
      },
      {
        "id": "d",
        "text": "Retrospectives give agile team members a forum where they focus on discussing the plan and technical decisions for the next iteration"
      }
    ],
    "selectCount": 1,
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. The benefits of retrospectives include team bonding and\n                    learning from sharing issues, and better collaboration between\n                    developers and testers through reviewing and improving working\n                    practices. Calling out individuals who a team member may feel did not\n                    fully contribute to achieving quality as required by the whole team\n                    approach will not contribute to this team bonding and collaboration\n                 b) Is correct. During the retrospective, the group discusses what aspects of\n                    the project were successful and should be retained, as well as areas\n                    that could be improved, and how to do so\n                 c) Is not correct. The benefits of retrospectives are based on increased\n                    effectiveness and efficiency through process improvements; they are\n                    not an opportunity to let off steam and criticize management and\n                    customers. Also, the test results are recorded, usually in the test\n                    completion report, so anything said in the meeting could be read by\n                    other stakeholders\n                 d) Is not correct. Retrospectives are meetings that are typically held at the\n                    end of an iteration where team members will focus on discussing\n                    quality-related issues that have occurred in the current iteration. They\n                    are not used for making plans or technical decisions for the next\n                    iteration; this would be done in the iteration planning meeting at the start\n                    of the next iteration\n\nQuestion Correct                            Explanation / Rationale                                Learning    K-Level   Number\nNumber Answer                                                                                      Objective                of\n  (#)                                                                                                (LO)                 Points",
    "lo": "FL-2.1.6",
    "kLevel": "K2"
  },
  {
    "set": "D",
    "number": "13",
    "id": "D-13",
    "points": "1 Point",
    "stem": "Which of the following tests is MOST likely to be performed as part of functional testing?",
    "options": [
      {
        "id": "a",
        "text": "The test checks that the sort function puts the elements of the list or array in ascending order"
      },
      {
        "id": "b",
        "text": "The test checks whether the sort function completes sorting within one second of starting"
      },
      {
        "id": "c",
        "text": "The test checks how easily the sort function can be changed from sorting ascending to sorting descending"
      },
      {
        "id": "d",
        "text": "The test checks that the sort function still functions correctly when moved from a 32-bit to a 64-bit architecture"
      }
    ],
    "selectCount": 1,
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. Checking that the sort function puts the elements of the list or\n                    array in ascending order is evaluating the functional correctness of the\n                    sort function, which is part of functional testing\n                 b) Is not correct. Assessing whether the sort function meets its non-\n                    functional requirement to complete within one second is part of testing\n                    its performance efficiency, which is part of non-functional testing\n                 c) Is not correct. Evaluating the ease with which the sort function can be\n                    modified from sorting ascending to sorting descending is testing its\n                    modifiability, a form of non-functional maintainability testing, which is\n                    part of non-functional testing\n                 d) Is not correct. Assessing that the sort function still functions correctly\n                    when moved from a 32-bit to a 64-bit architecture is testing its\n                    adaptability, a form of portability testing, which is part of non-functional\n                    testing\n\nQuestion Correct                              Explanation / Rationale                            Learning    K-Level   Number\nNumber Answer                                                                                    Objective                of\n  (#)                                                                                              (LO)                 Points",
    "lo": "FL-2.2.2",
    "kLevel": "K2"
  },
  {
    "set": "D",
    "number": "14",
    "id": "D-14",
    "points": "1 Point",
    "stem": "Which of the following is MOST likely to be a trigger that leads to maintenance testing of a\ncurrency exchange system?",
    "options": [
      {
        "id": "a",
        "text": "The developers reported that changing the currency exchange system was difficult and the testers decided to check if this was true"
      },
      {
        "id": "b",
        "text": "The refund option of the currency exchange system was removed as it did not always repay the correct amount to customers"
      },
      {
        "id": "c",
        "text": "The agile team has started developing a user story that adds a new customer loyalty feature to the currency exchange system"
      },
      {
        "id": "d",
        "text": "The language support option of the currency exchange system was used to enable both English and local language currency transactions"
      }
    ],
    "selectCount": 1,
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. Assuming that testers could check the ease of changing\n                    the currency exchange system then it would be done by maintainability\n                    testing rather than maintenance testing, so this is not a trigger for\n                    maintenance testing\n                 b) Is correct. A system modification (such as a fix or enhancement) is an\n                    example of a trigger for maintenance testing. The removal of the refund\n                    option of the currency exchange system was a fix that would lead to\n                    maintenance testing\n                 c) Is not correct. If the agile team has started developing a user story that\n                    adds a new customer loyalty feature to the currency exchange system,\n                    then this will result in them testing the new feature, and then they would\n                    perform regression testing. No maintenance testing is required in this\n                    situation\n                 d) Is not correct. Reconfiguration of the currency exchange system to\n                    support both the local language and English currency transactions is not\n                    a system modification, a change to the operational environment, or a\n                    system retirement, which are the three triggers for maintenance testing\n\nQuestion Correct                             Explanation / Rationale                             Learning    K-Level   Number\nNumber Answer                                                                                    Objective                of\n  (#)                                                                                              (LO)                 Points",
    "lo": "FL-2.3.1",
    "kLevel": "K2"
  },
  {
    "set": "D",
    "number": "15",
    "id": "D-15",
    "points": "1 Point",
    "stem": "Which of the following CANNOT be examined by static testing?",
    "options": [
      {
        "id": "a",
        "text": "Contract"
      },
      {
        "id": "b",
        "text": "Test plan"
      },
      {
        "id": "c",
        "text": "Encrypted code"
      },
      {
        "id": "d",
        "text": "Test charter"
      }
    ],
    "selectCount": 1,
    "correct": [
      "c"
    ],
    "explanation": "a) Is not correct. Most work products can be examined using some form of\n                     static testing, and a contract must be interpretable by humans and so\n                     could be reviewed, which is a form of static testing\n                 b) Is not correct. Most work products can be examined using some form of\n                     static testing, and a test plan must be interpretable by humans and so\n                     could be reviewed, which is a form of static testing\n                 c) Is correct. Most work products can be examined using some form of\n                     static testing; however it is not suitable for work products that are too\n                     complex for human interpretation and should not be analyzed by tools,\n                     and encrypted code is too complex for humans and if it is properly\n                     encrypted it will not be analyzable by most tools\n                 d) Is not correct. Most work products can be examined using some form of\n                     static testing, and a test charter must be interpretable by humans and\n                     so could be reviewed, which is a form of static testing",
    "lo": "FL-3.1.1",
    "kLevel": "K1"
  },
  {
    "set": "D",
    "number": "16",
    "id": "D-16",
    "points": "1 Point",
    "stem": "Which of the following statements about the value of static testing is CORRECT?",
    "options": [
      {
        "id": "a",
        "text": "The defect types found by static testing are different from the defect types that can be found by dynamic testing"
      },
      {
        "id": "b",
        "text": "Dynamic testing can detect the defect types that can be found by static testing plus some additional defect types"
      },
      {
        "id": "c",
        "text": "Dynamic testing can identify some of the defects that can be found by static testing but not all of them"
      },
      {
        "id": "d",
        "text": "Static testing can identify the defect types that can be found by dynamic testing as well as some extra defect types"
      }
    ],
    "selectCount": 1,
    "correct": [
      "c"
    ],
    "explanation": "Some defect types that can only be detected by static testing, such as\n                 unreachable code, design patterns not implemented as desired and defects\n                 in non-executable work products. Some defect types that can be found by\n                 both static testing and dynamic testing, such as a programming defect that\n                 can be observed by a reviewer in a code review and which causes an\n                 observable failure during dynamic testing. And some defect types that can\n                 only be detected by dynamic testing, such as performance issues or\n                 memory issues that can only be observed when executing the code or\n                 system.\n\n                                         Thus:\n                                         a) Is not correct\n                                         b) Is not correct\n                                         c) Is correct\n                                         d) Is not correct\n\nQuestion Correct                            Explanation / Rationale                                                Learning    K-Level   Number\nNumber Answer                                                                                                      Objective                of\n  (#)                                                                                                                (LO)                 Points",
    "lo": "FL-3.1.2",
    "kLevel": "K2"
  },
  {
    "set": "D",
    "number": "17",
    "id": "D-17",
    "points": "1 Point",
    "stem": "Given the following descriptions of review activities:\n           1. Detected anomalies are deliberated upon, and determinations are reached\n               regarding their status, ownership, and any further steps needed\n           2. Defects are recorded, and any needed updates are addressed prior to the\n               acceptance of the work product\n           3. Reviewers employ techniques to come up with suggestions and questions about the\n               work product and to spot anomalies\n           4. The objective of the review and its schedule are established to ensure a focused\n               and efficient review\n           5. Participants are provided with access to the item being reviewed\nWhich of the following is the CORRECT sequence in the review process of the activities that\ncorrespond to the descriptions?",
    "options": [
      {
        "id": "a",
        "text": "4–3–5–2–1"
      },
      {
        "id": "b",
        "text": "4–5–3–1–2"
      },
      {
        "id": "c",
        "text": "5–4–1–3–2"
      },
      {
        "id": "d",
        "text": "5–4–3–2–1"
      }
    ],
    "selectCount": 1,
    "correct": [
      "b"
    ],
    "explanation": "The five listed descriptions and the corresponding review process activities\n                 are:\n                        1. This describes part of the ‘communication and analysis’ activity\n                        2. This describes part of the ‘fixing and reporting’ activity\n                        3. This describes part of the ‘individual review’ activity\n                        4. This describes part of the ‘planning’ activity\n                        5. This describes part of the ‘review initiation’ activity\n\n                                         The generic review process from ISO/IEC 20246, which is outlined in the\n                                         syllabus, comprises the following activities in this logical order:\n                                               • Planning (4)\n                                               • Review initiation (5)\n                                               • Individual review (3)\n                                               • Communication and analysis (1)\n                                               • Fixing and reporting (2)\n\n                                         Thus:\n                                         a) Is not correct\n                                         b) Is correct. The correct sequence of activities is: 4 – 5 – 3 – 1 – 2\n                                         c) Is not correct\n                                         d) Is not correct\n\nQuestion Correct                           Explanation / Rationale                                Learning    K-Level   Number\nNumber Answer                                                                                     Objective                of\n  (#)                                                                                               (LO)                 Points",
    "lo": "FL-3.2.2",
    "kLevel": "K2"
  },
  {
    "set": "D",
    "number": "18",
    "id": "D-18",
    "points": "1 Point",
    "stem": "Which participant in the review process is responsible for ensuring that the review meetings run\neffectively and that everyone at the meetings can voice their opinions freely?",
    "options": [
      {
        "id": "a",
        "text": "Manager"
      },
      {
        "id": "b",
        "text": "Moderator"
      },
      {
        "id": "c",
        "text": "Chairperson"
      },
      {
        "id": "d",
        "text": "Review Leader"
      }
    ],
    "selectCount": 1,
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. The manager is responsible for deciding what needs to\n                    be reviewed and allocating resources, such as staff and time, for the\n                    review\n                 b) Is correct. The moderator (or facilitator) is responsible for ensuring that\n                    the review meetings run effectively, including managing time, mediating\n                    discussions, and creating a safe environment where everyone can voice\n                    their opinions freely\n                 c) Is not correct. The chairperson is not a recognized role in reviews\n                 d) Is not correct. The review leader is responsible for overseeing the\n                    review process, such as selecting the review team members,\n                    scheduling review meetings, and ensuring that the review is completed\n                    successfully",
    "lo": "FL-3.2.3",
    "kLevel": "K1"
  },
  {
    "set": "D",
    "number": "19",
    "id": "D-19",
    "points": "1 Point",
    "stem": "You perform system testing of an e-commerce web application and are provided with the following\nrequirement:\n           REQ 05-017. If the total cost of purchases exceeds $100, the customer gets a 5%\n           discount on subsequent purchases. Otherwise, the customer does not receive a\n           discount.\n\nWhich test techniques will be MOST helpful in designing test cases based on this requirement?",
    "options": [
      {
        "id": "a",
        "text": "White-box test techniques"
      },
      {
        "id": "b",
        "text": "Black-box test techniques"
      },
      {
        "id": "c",
        "text": "Experience-based test techniques"
      },
      {
        "id": "d",
        "text": "Risk-based test techniques"
      }
    ],
    "selectCount": 1,
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. The document does not refer to the test object’s internal\n                    structure but specifies the desired behavior of the test object. Therefore,\n                    white-box test techniques will not be helpful in designing test cases\n                 b) Is correct. The document is a requirement that specifies the desired\n                    behavior of the test object. Therefore, the most suitable test techniques\n                    in this case are the black-box test techniques (e.g., Boundary Value\n                    Analysis or Decision Table Testing)\n                 c) Is not correct. Although experience-based test techniques can be used\n                    to design test cases based on this document, black-box test techniques\n                    will be more suitable. The document describes a precise business rule\n                    and, in addition, wording like \"exceeds $100\" suggests the existence of\n                    important equivalence partition boundaries that should be tested using\n                    black-box test techniques like Boundary Value Analysis\n                 d) Is not correct. Risk-based test techniques are not a recognized type of\n                    test technique\n\nQuestion Correct                             Explanation / Rationale                              Learning    K-Level   Number\nNumber Answer                                                                                     Objective                of\n  (#)                                                                                               (LO)                 Points",
    "lo": "FL-4.1.1",
    "kLevel": "K2"
  },
  {
    "set": "D",
    "number": "20",
    "id": "D-20",
    "points": "1 Point",
    "stem": "The system for selling cinema tickets calculates the discount type based on the client’s birth year\n(BY) and on the current year (CY) as follows:\n\nLet D be the difference between CY and BY, that is, D = CY – BY\n           • If D < 0            then print the error message “birth year cannot be greater than\n               current year”\n           • If 0 ≤ D < 18       then apply the student discount\n           • If 18 ≤ D < 65      then apply no discount\n           • If D ≥ 65           then apply the pensioner discount\nYour test suite already contains two test cases:\n           • BY = 1990, CY = 2020,            expected result: no discount\n           • BY = 2030, CY = 2029,            expected result: print the error message\nWhich of the following test data sets should be added to achieve full valid equivalence partitioning\ncoverage for the discount type?",
    "options": [
      {
        "id": "a",
        "text": "BY = 2001, CY = 2065"
      },
      {
        "id": "b",
        "text": "BY = 1900, CY = 1965"
      },
      {
        "id": "c",
        "text": "BY = 1965, CY = 1900"
      },
      {
        "id": "d",
        "text": "BY = 2011, CY = 2029"
      },
      {
        "id": "e",
        "text": "BY = 2000, CY = 2000"
      }
    ],
    "selectCount": 2,
    "correct": [
      "b",
      "e"
    ],
    "explanation": "There are two equivalence partitions that are not yet covered, which\n                 correspond to “student discount” and “pensioner discount”.\n                 a) Is not correct. CY – BY = 64, so these inputs correspond to the already\n                      covered “no discount” partition\n                 b) Is correct. CY – BY = 65, so these inputs correspond to a partition that\n                      is not yet covered (“pensioner discount”)\n                 c) Is not correct. CY – BY = –65, so these inputs correspond to the already\n                      covered “error message” partition\n                 d) Is not correct. CY – BY = 18, so these inputs correspond to the already\n                      covered “no discount” partition\n                 e) Is correct. CY – BY = 0, so these inputs correspond to a partition that is\n                      not yet covered (“student discount”)",
    "lo": "FL-4.2.1",
    "kLevel": "K3"
  },
  {
    "set": "D",
    "number": "21",
    "id": "D-21",
    "points": "1 Point",
    "stem": "You are testing a temperature control system for a horticultural cold storage facility. The system\nreceives the temperature (in full degrees Celsius) as the input. If the temperature is between 0 and\n2 degrees inclusive, the system displays the message “temperature OK”. For lower temperatures,\nthe system displays the message \"temperature too low\" and for higher temperatures it displays the\nmessage “temperature too high”.\n\nUsing two-value boundary value analysis, which of the following sets of test inputs provides the\nhighest level of boundary value coverage?",
    "options": [
      {
        "id": "a",
        "text": "–1, 3"
      },
      {
        "id": "b",
        "text": "0, 2"
      },
      {
        "id": "c",
        "text": "–1, 0, 2, 3"
      },
      {
        "id": "d",
        "text": "–2, 0, 2, 4"
      }
    ],
    "selectCount": 1,
    "correct": [
      "c"
    ],
    "explanation": "There are three equivalence partitions: {…, –2, –1}, {0, 1, 2}, {3, 4, …}.\n                 For 2-value BVA all the boundary values for all the equivalence partitions\n                 must be covered.\n                 The boundary values are –1 (for the “temperature too low” partition), 0, 2\n                 (for the “temperature OK” partition) and 3 (for the “temperature too high”\n                 partition).\n\n                                         Thus:\n                                         a) Is not correct\n                                         b) Is not correct\n                                         c) Is correct. The correct option is: –1, 0, 2, 3\n                                         d) Is not correct\n\nQuestion Correct                            Explanation / Rationale                              Learning    K-Level   Number\nNumber Answer                                                                                    Objective                of\n  (#)                                                                                              (LO)                 Points",
    "lo": "FL-4.2.2",
    "kLevel": "K3"
  },
  {
    "set": "D",
    "number": "22",
    "id": "D-22",
    "points": "1 Point",
    "stem": "You are designing test cases based on the following decision table.\n\n                                                         R1      R2        R3          R4   R5      R6     R7\n                                  C1: Age                0-18   19-65     19-65    >65      0-18   19-65   >65\n                      C2: Experience                      -      0-4        >4         -     -       -      -\n                     C3: Registered?                     NO      NO        NO          NO   YES    YES     YES\n                                 Category                 A      A          B          B     B      D      C\n\nSo far you have designed the following test cases:\n           • TC1: 19-year-old, unregistered man with no experience;\n              expected result: category A\n           • TC2: 65-year-old, unregistered woman with 5 years of experience;\n              expected result: category B\n           • TC3: 66-year-old, registered man with no experience;\n              expected result: category C\n           • TC4: 65-year-old, registered woman with 4 years of experience;\n              expected result: category D\nWhich of the following test cases, when added to the existing set of test cases, will increase the\ndecision table coverage?",
    "options": [
      {
        "id": "a",
        "text": "66-year-old, unregistered man with no experience; expected result: category B"
      },
      {
        "id": "b",
        "text": "55-year-old, unregistered woman with 2 years of experience; expected result: category A"
      },
      {
        "id": "c",
        "text": "19-year-old, registered woman with 5 years of experience; expected result: category D"
      },
      {
        "id": "d",
        "text": "No additional test case can increase the already achieved decision table coverage"
      }
    ],
    "selectCount": 1,
    "correct": [
      "a"
    ],
    "explanation": "Test cases TC1, TC2, TC3 and TC4 cover, respectively, rules R2, R3, R7\n                 and R6 in the decision table.\n                 a) Is correct. The conditions “66-year-old”, “unregistered” and “no\n                    experience” match rule R4, which is not covered by the existing test\n                    cases, so after adding this test case, the decision table coverage will\n                    increase\n                 b) Is not correct. The conditions “55-year-old”, “unregistered” and “2 years\n                    of experience” match rule R2, already covered by TC1. So adding this\n                    test case will not increase the coverage\n                 c) Is not correct. The conditions “19-year-old”, “registered” and “5 years of\n                    experience” match rule R6, already covered by TC4. So adding this test\n                    case will not increase the coverage\n                 d) Is not correct. The existing test cases cover only 4 out of 7 columns of\n                    the decision table. The coverage can be increased by adding test cases\n                    that cover yet uncovered columns, that is, R1, R4 and R5\n\nQuestion Correct                            Explanation / Rationale                               Learning    K-Level   Number\nNumber Answer                                                                                     Objective                of\n  (#)                                                                                               (LO)                 Points",
    "lo": "FL-4.2.3",
    "kLevel": "K3"
  },
  {
    "set": "D",
    "number": "23",
    "id": "D-23",
    "points": "1 Point",
    "stem": "You are applying state transition testing to the hotel room reservation system modeled by the\nfollowing state transition table, with 4 states and 5 different events:\n\n                                                                            Events\n           State                    Available            NotAvailable   ChangeRoom   Cancel   Pay\nS1: Requesting                            S2                 S3\nS2: Confirmed                                                                S1       S4      S4\nS3: Waiting list                          S2                                          S4\nS4: End\n\nAssuming all test cases start in the ‘Requesting’ state, which of the following test cases,\nrepresented as sequences of events, achieves the highest valid transitions coverage?",
    "options": [
      {
        "id": "a",
        "text": "NotAvailable, Available, ChangeRoom, NotAvailable, Cancel"
      },
      {
        "id": "b",
        "text": "Available, ChangeRoom, NotAvailable, Available, Pay"
      },
      {
        "id": "c",
        "text": "Available, ChangeRoom, Available, ChangeRoom, NotAvailable"
      },
      {
        "id": "d",
        "text": "NotAvailable, Cancel, ChangeRoom, Available, Pay"
      }
    ],
    "selectCount": 1,
    "correct": [
      "b"
    ],
    "explanation": "a) Is not correct. This sequence of five events covers 4 different valid\n                    transitions (both “NotAvailable” events correspond to the same\n                    transition between S1 and S3). This test case covers 4 out of 7 valid\n                    transitions\n                 b) Is correct. This sequence of five events covers 5 different transitions\n                    (the first “Available” event corresponds to a transition between S1 and\n                    S2, and the second “Available” event corresponds to a transition\n                    between S3 and S2, so two different transitions are covered). This test\n                    case covers 5 out of 7 valid transitions and achieves the highest valid\n                    transitions coverage\n                 c) Is not correct. This sequence of five events covers 3 different transitions\n                    (both “Available” events correspond to the same transition from S1 to\n                    S2; both “ChangeRoom” events correspond to the same transition from\n                    S2 to S1). This test case covers 3 out of 7 valid transitions\n                 d) Is not correct. This sequence of five events does not represent a\n                    feasible test case, because after “Cancel” the system ends up in the\n                    End state and no further valid transitions can be executed\n\nQuestion Correct                           Explanation / Rationale                                 Learning    K-Level   Number\nNumber Answer                                                                                      Objective                of\n  (#)                                                                                                (LO)                 Points",
    "lo": "FL-4.2.4",
    "kLevel": "K3"
  },
  {
    "set": "D",
    "number": "24",
    "id": "D-24",
    "points": "1 Point",
    "stem": "Your test suite S for a program P achieves 100% statement coverage. It consists of three test\ncases, each of which achieves 50% statement coverage.\n\nWhich of the following statements is CORRECT?",
    "options": [
      {
        "id": "a",
        "text": "Executing S will cause all possible failures in P"
      },
      {
        "id": "b",
        "text": "S achieves 100% branch coverage for P"
      },
      {
        "id": "c",
        "text": "Every executable statement in P containing a defect has been run at least once during the execution of S"
      },
      {
        "id": "d",
        "text": "After removing one test case from S, the remaining two test cases will still achieve 100% statement coverage"
      }
    ],
    "selectCount": 1,
    "correct": [
      "c"
    ],
    "explanation": "a) Is not correct. A statement with a defect, when executed, does not have\n                    to cause a failure. For example, a statement x := y / z will cause a failure\n                    only when z equals 0\n                 b) Is not correct. 100% statement coverage does not guarantee 100%\n                    branch coverage. For example, a test case with x=0 for the code\n                           1. IF (x=0) THEN\n                           2.     A;\n                           3. ENDIF\n                    achieves 100% statement coverage but does not cover the branch from\n                    1 to 3\n                 c) Is correct. 100% statement coverage means that each executable\n                    statement was executed at least once\n                 d) Is not correct. The removed test case may provide coverage of some\n                    statements that are not covered by either of the other two test cases, in\n                    which case the remaining two test cases together will not achieve 100%\n                    statement coverage\n\nQuestion Correct                             Explanation / Rationale                                  Learning    K-Level   Number\nNumber Answer                                                                                         Objective                of\n  (#)                                                                                                   (LO)                 Points",
    "lo": "FL-4.3.1",
    "kLevel": "K2"
  },
  {
    "set": "D",
    "number": "25",
    "id": "D-25",
    "points": "1 Point",
    "stem": "Why does white-box testing facilitate defect detection even when the software specification is\nvague, outdated or incomplete?",
    "options": [
      {
        "id": "a",
        "text": "Test cases are designed based on the structure of the test object rather than the specification"
      },
      {
        "id": "b",
        "text": "For each white-box test technique the coverage can be well-defined and easily measured"
      },
      {
        "id": "c",
        "text": "White-box test techniques are very well designed to detect omissions in the requirements"
      },
      {
        "id": "d",
        "text": "White-box test techniques can be used in both static testing and dynamic testing"
      }
    ],
    "selectCount": 1,
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. A fundamental strength that all white-box test techniques\n                     share is that the entire software implementation is taken into account\n                     during testing, which facilitates defect detection even when the software\n                     specification is vague, outdated or incomplete. This means white-box\n                     testing can find defects such as an extra feature added to the code\n                     (either accidentally or deliberately) that is not supposed to be there,\n                     which black-box testing cannot detect\n                 b) Is not correct. The fact that the coverage can be precisely defined is not\n                     the right reason. The achieved level of coverage would have much more\n                     impact than the possibility to measure the coverage\n                 c) Is not correct. If the software does not implement one or more\n                     requirements, white-box testing is unlikely to detect the resulting defects\n                     of omission\n                 d) Is not correct. While this is true, this is not the right answer, because\n                     there is no connection between the capability to be used in both static\n                     testing and dynamic testing and the claim that white-box testing\n                     facilitates defect detection with poor specifications",
    "lo": "FL-4.3.3",
    "kLevel": "K2"
  },
  {
    "set": "D",
    "number": "26",
    "id": "D-26",
    "points": "1 Point",
    "stem": "Which of the following is NOT anticipated by the tester while applying error guessing?",
    "options": [
      {
        "id": "a",
        "text": "The developer misunderstood the formula in the user story for calculating the interest"
      },
      {
        "id": "b",
        "text": "The developer wrote “FA = A*(1+IR^N)” instead of “FA = A*(1+IR)^N” in the source code"
      },
      {
        "id": "c",
        "text": "The developer missed the seminar on new compound interest rate legislation"
      },
      {
        "id": "d",
        "text": "The accuracy of the interest calculated by the system is not precise enough"
      }
    ],
    "selectCount": 1,
    "correct": [
      "c"
    ],
    "explanation": "Error guessing is about anticipating the errors, defects and failures based\n                 on the tester’s knowledge.\n                 a) Is not correct. This is an example of anticipating the developer’s error\n                 b) Is not correct. This is an example of anticipating the defect\n                 c) Is correct. This is an example of a potential root cause of a defect,\n                     which is neither an error, defect nor failure, and difficult for the tester to\n                     anticipate\n                 d) Is not correct. This is an example of anticipating a failure, perhaps\n                     based on experience of previous systems in this application domain\n\nQuestion Correct                             Explanation / Rationale                              Learning    K-Level   Number\nNumber Answer                                                                                     Objective                of\n  (#)                                                                                               (LO)                 Points",
    "lo": "FL-4.4.1",
    "kLevel": "K2"
  },
  {
    "set": "D",
    "number": "27",
    "id": "D-27",
    "points": "1 Point",
    "stem": "Which of the following is true about exploratory testing?",
    "options": [
      {
        "id": "a",
        "text": "Test cases are designed before the exploratory testing session starts"
      },
      {
        "id": "b",
        "text": "The tester can perform test execution, but cannot perform test design"
      },
      {
        "id": "c",
        "text": "Exploratory testing results are good predictors of the number of remaining defects"
      },
      {
        "id": "d",
        "text": "During exploratory testing the tester may use black-box test techniques"
      }
    ],
    "selectCount": 1,
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. In exploratory testing, test cases are usually created\n                    during the exploratory testing session, alongside test analysis, test\n                    implementation and test execution\n                 b) Is not correct. In exploratory testing, tests are simultaneously designed,\n                    executed, and evaluated while the tester learns about the test object\n                 c) Is not correct. Exploratory test results depend heavily on the tester’s\n                    experience. So, even if the test results of exploratory testing can be\n                    used as a predictor of risk and used to assess whether there will be\n                    fewer or more defects, compared to the previous exploratory testing\n                    session, they are not a good example of reliable defect prediction\n                    models that can predict the number of remaining defects\n                 d) Is correct. During exploratory testing, the testers can use any test\n                    techniques that they find useful",
    "lo": "FL-4.4.2",
    "kLevel": "K2"
  },
  {
    "set": "D",
    "number": "28",
    "id": "D-28",
    "points": "1 Point",
    "stem": "Which collaborative user story writing practice enables the team to achieve a collective\nunderstanding of what needs to be delivered?",
    "options": [
      {
        "id": "a",
        "text": "Planning poker, so that a team can achieve consensus on the effort needed to implement a user story"
      },
      {
        "id": "b",
        "text": "Reviews, so that a team can detect inconsistencies and contradictions in a user story"
      },
      {
        "id": "c",
        "text": "Iteration planning, so that user stories with the highest business value for a customer can be prioritized for implementation"
      },
      {
        "id": "d",
        "text": "Conversation, so that team members can understand how the software will be used"
      }
    ],
    "selectCount": 1,
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. Planning poker can estimate effort for a user story that is\n                    already written. It does not help in understanding what should be\n                    delivered\n                 b) Is not correct. Reviews are not a collaborative user story writing practice\n                 c) Is not correct. Iteration planning is a project-related practice, used to\n                    plan the work, not to understand what needs to be delivered\n                 d) Is correct. Conversation explains how the software will be used and\n                    often allows the team to define meaningful acceptance criteria, thus\n                    obtaining a shared vision of what should be delivered\n\nQuestion Correct                             Explanation / Rationale                               Learning    K-Level   Number\nNumber Answer                                                                                      Objective                of\n  (#)                                                                                                (LO)                 Points",
    "lo": "FL-4.5.1",
    "kLevel": "K2"
  },
  {
    "set": "D",
    "number": "29",
    "id": "D-29",
    "points": "1 Point",
    "stem": "You have just started designing test cases for the following user story.\n\n As a customer,\n I want to be able to filter search results by price range, so that I can find products within my\n budget more easily.\n Acceptance criteria:\n             1. The filter should work for all versions of the application from version 3.0\n                upwards\n             2. The filter should allow the customer to set a price range with a minimum\n                and a maximum price\n             3. The search results should update dynamically as the customer adjusts the\n                price range filter\nIn all test cases the precondition is as follows: there are only two products available, products A\nand B. Product A costs $100 and product B costs $110.\n\nWhich of the following is the BEST example of a test case for this user story?",
    "options": [
      {
        "id": "a",
        "text": "Enter webpage and set filter to show prices between $90 and $100. Expected result: results show product A only. Set maximum price to $110. Expected result: results now include both products A and B"
      },
      {
        "id": "b",
        "text": "Enter webpage. Expected result: the default minimum and maximum prices are $100 and $110 respectively. Add product C to stock, with price $120. Refresh the client’s webpage. Expected result: the default maximum price changes to $120"
      },
      {
        "id": "c",
        "text": "Enter webpage and set filter to show prices between $90 and $115. Expected result: results show both products A and B. Change currency from USD to EUR. Expected result: the filter range changes correctly to EUR values, according to the current exchange rate"
      },
      {
        "id": "d",
        "text": "Enter webpage with three different browsers: Edge, Chrome and Opera. In each browser set filter between $90 and $110. Expected result: results include both products A and B and the results layout is the same in all three browsers"
      }
    ],
    "selectCount": 1,
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. This test case is related to acceptance criteria 2 and 3,\n                    because we check if we can set price range (acceptance criterion 2)\n                    and if the results update dynamically after adjusting the price range filter\n                    (acceptance criterion 3)\n                 b) Is not correct. This test case is not related to any of the acceptance\n                    criteria. It checks if the filter dynamically sets the default minimum and\n                    maximum price range, and not that a customer can do it\n                 c) Is not correct. This test case is not related to any of the acceptance\n                    criteria. It checks the currency exchange feature, which is not discussed\n                    in this user story\n                 d) Is not correct. This test case is not related to any of the acceptance\n                    criteria. It checks the application’s compatibility with different browsers,\n                    which is not discussed in this user story",
    "lo": "FL-4.5.3",
    "kLevel": "K3"
  },
  {
    "set": "D",
    "number": "30",
    "id": "D-30",
    "points": "1 Point",
    "stem": "Which of the following BEST define EXIT criteria in a testing project?",
    "options": [
      {
        "id": "a",
        "text": "Budget is approved"
      },
      {
        "id": "b",
        "text": "Budget runs out"
      },
      {
        "id": "c",
        "text": "Test basis is available"
      },
      {
        "id": "d",
        "text": "Test cases achieved at least 80% statement coverage"
      },
      {
        "id": "e",
        "text": "All test analysts are ISTQB certified at the Foundation Level"
      }
    ],
    "selectCount": 2,
    "correct": [
      "b",
      "d"
    ],
    "explanation": "a) Is not correct. The approval of the budget is an example of an entry\n                    criterion. It would make no sense to approve the budget for some\n                    activity that has already been done\n                 b) Is correct. Running out of budget can be viewed as a valid exit criterion\n                 c) Is not correct. Availability of resources is an example of an entry\n                    criterion for testing\n                 d) Correct. Coverage is a measure of thoroughness, so it is a typical exit\n                    criterion\n                 e) Is not correct. This is an example of an entry criterion, checked before\n                    the project starts\n\nQuestion Correct                           Explanation / Rationale                                                         Learning    K-Level   Number\nNumber Answer                                                                                                              Objective                of\n  (#)                                                                                                                        (LO)                 Points",
    "lo": "FL-5.1.3",
    "kLevel": "K2"
  },
  {
    "set": "D",
    "number": "31",
    "id": "D-31",
    "points": "1 Point",
    "stem": "The team wants to estimate the time needed for one tester to execute four test cases for a\nsoftware component. The team has gathered the following measures of the effort used to execute\na single test case:\n           • Best-case scenario:       1 hour\n           • Worst-case scenario:      8 hours\n           • Most likely scenario:     3 hours\n\nGiven that the three-point estimation technique is being used, what is the final estimate of the time\nneeded to execute all four test cases?",
    "options": [
      {
        "id": "a",
        "text": "14 hours"
      },
      {
        "id": "b",
        "text": "3.5 hours"
      },
      {
        "id": "c",
        "text": "16 hours"
      },
      {
        "id": "d",
        "text": "12 hours"
      }
    ],
    "selectCount": 1,
    "correct": [
      "a"
    ],
    "explanation": "Using the three-point estimation technique, the final estimate (E) is\n                 calculated as:\n                           E = (a + 4*m + b) / 6,\n                 where a is the most optimistic estimate, m is the most likely estimate, and b\n                 is the most pessimistic estimate.\n\n                                         Thus:\n                                          a) Is correct. In this case, the estimate for executing a single test case is:\n                                                     E = (1h + 4*3h + 8h) / 6 = 3.5 hours\n                                                 So, the total time needed for the tester to execute 4 test cases is:\n                                                     3.5h * 4 = 14 hours\n                                          b) Is not correct\n                                          c) Is not correct\n                                          d) Is not correct",
    "lo": "FL-5.1.4",
    "kLevel": "K3"
  },
  {
    "set": "D",
    "number": "32",
    "id": "D-32",
    "points": "1 Point",
    "stem": "The table shows the traceability matrix from test cases to requirements. “X” means that a given test\ncase covers the corresponding requirement.\n\n                         Req1          Req2              Req3   Req4    Req5    Req6     Req7\n            TC1             X                             X      X                        X\n            TC2             X                                             X               X\n            TC3                                                           X          X\n            TC4                            X\nYou want to prioritize the test cases following the additional coverage prioritization technique.\n\nYou execute all four test cases.\n\nWhich test case should be executed as the LAST one?",
    "options": [
      {
        "id": "a",
        "text": "TC1"
      },
      {
        "id": "b",
        "text": "TC2"
      },
      {
        "id": "c",
        "text": "TC3"
      },
      {
        "id": "d",
        "text": "TC4"
      }
    ],
    "selectCount": 1,
    "correct": [
      "b"
    ],
    "explanation": "TC1 achieves the highest coverage (4/7 – Req1, Req3, Req4 and Req7), so\n                                         should be executed first.\n                                         Req2, Req5 and Req6 are still not covered.\n                                         The next test case that achieves the highest additional coverage of the\n                                         remaining requirements is TC3, covering 2 out of these 3 requirements\n                                         (Req5 and Req6). So, TC3 should be executed as the second one.\n                                         Now the only requirement still not covered is Req2, which is covered by\n                                         TC4. Therefore, TC4 should be executed as the third test case.\n                                         So, the last test case executed will be TC2.\n\n                                         Thus:\n                                         a) Is not correct\n                                         b) Is correct\n                                         c) Is not correct\n                                         d) Is not correct\n\nQuestion Correct                               Explanation / Rationale                         Learning    K-Level   Number\nNumber Answer                                                                                  Objective                of\n  (#)                                                                                            (LO)                 Points",
    "lo": "FL-5.1.5",
    "kLevel": "K3"
  },
  {
    "set": "D",
    "number": "33",
    "id": "D-33",
    "points": "1 Point",
    "stem": "How can the testing quadrants be beneficial for testing?",
    "options": [
      {
        "id": "a",
        "text": "They help in test planning by dividing the test process into four phases, corresponding to the four basic test levels: component, integration, system, and acceptance testing"
      },
      {
        "id": "b",
        "text": "They help in assessing the high-level coverage (e.g., requirements coverage) based on low-level coverage (e.g., code coverage)"
      },
      {
        "id": "c",
        "text": "They help non-technical stakeholders to understand the different test types and that some test types are more relevant to certain test levels than others"
      },
      {
        "id": "d",
        "text": "They help agile teams to develop a communication strategy based on classifying people according to four basic psychological types, and on modelling the relations between them"
      }
    ],
    "selectCount": 1,
    "correct": [
      "c"
    ],
    "explanation": "a) Is not correct. Testing quadrants have nothing to do with describing the\n                      relationships between test levels\n                 b) Is not correct. Testing quadrants cannot help in assessing any type of\n                      coverage\n                 c) Is correct. Testing quadrants allow managers and other stakeholders to\n                      understand the relationships between test types, the activities they\n                      support (team support or product critique), and the viewpoint they are\n                      focused on (business- or technology-facing)\n                 d) Is not correct. Testing quadrants is not a psychological model",
    "lo": "FL-5.1.7",
    "kLevel": "K2"
  },
  {
    "set": "D",
    "number": "34",
    "id": "D-34",
    "points": "1 Point",
    "stem": "For a given risk, its risk level is $1,000 and its risk likelihood is estimated as 50%.\n\nWhat is the risk impact?",
    "options": [
      {
        "id": "a",
        "text": "$500"
      },
      {
        "id": "b",
        "text": "$2,000"
      },
      {
        "id": "c",
        "text": "$50,000"
      },
      {
        "id": "d",
        "text": "$200"
      }
    ],
    "selectCount": 1,
    "correct": [
      "b"
    ],
    "explanation": "Risk assessment can use a quantitative or qualitative approach, or a mix of\n                 them. In the quantitative approach the risk level is calculated as the\n                 multiplication of risk likelihood and risk impact. So, Risk level = Risk\n                 likelihood * Risk impact\n                 Then, Risk impact = Risk level / Risk likelihood.\n                 In our case, Risk impact = $1,000 / 50% = $1,000 / 0.5 = $2,000.\n\n                                         Thus:\n                                         a) Is not correct\n                                         b) Is correct\n                                         c) Is not correct\n                                         d) Is not correct\n\nQuestion Correct                            Explanation / Rationale                                Learning    K-Level   Number\nNumber Answer                                                                                      Objective                of\n  (#)                                                                                                (LO)                 Points",
    "lo": "FL-5.2.1",
    "kLevel": "K1"
  },
  {
    "set": "D",
    "number": "35",
    "id": "D-35",
    "points": "1 Point",
    "stem": "Which of the following are product risks?",
    "options": [
      {
        "id": "a",
        "text": "Scope creep"
      },
      {
        "id": "b",
        "text": "Poor architecture"
      },
      {
        "id": "c",
        "text": "Cost-cutting"
      },
      {
        "id": "d",
        "text": "Poor tool support"
      },
      {
        "id": "e",
        "text": "Too long response time"
      }
    ],
    "selectCount": 2,
    "correct": [
      "b",
      "e"
    ],
    "explanation": "a) Is not correct. Scope creep is an example of a project risk related to\n                    technical issues\n                 b) Is correct. Poor architecture is an example of a product risk since it\n                    refers to a product characteristic\n                 c) Is not correct. Cost-cutting is an example of a project risk, related to\n                    organizational issues\n                 d) Is not correct. Poor tool support is an example of a project risk related to\n                    technical issues\n                 e) Is correct. Response time that is too long is an example of a product risk\n                    since it refers to a product characteristic",
    "lo": "FL-5.2.2",
    "kLevel": "K2"
  },
  {
    "set": "D",
    "number": "36",
    "id": "D-36",
    "points": "1 Point",
    "stem": "Which of the following is NOT a valid purpose for a test report?",
    "options": [
      {
        "id": "a",
        "text": "Tracking test progress and identifying areas that require further attention"
      },
      {
        "id": "b",
        "text": "Providing information on the tests executed, their results, and defects found"
      },
      {
        "id": "c",
        "text": "Providing information about each defect, such as the steps to reproduce it"
      },
      {
        "id": "d",
        "text": "Providing information on testing planned for the next period"
      }
    ],
    "selectCount": 1,
    "correct": [
      "c"
    ],
    "explanation": "a) Is not correct. Tracking test progress and identifying areas that require\n                    further attention is an example of supporting the ongoing control of\n                    testing. This is one of the purposes of test reports\n                 b) Is not correct. Providing information on the tests executed, their test\n                    results, and any defects found is an example of summarizing the test\n                    activities performed at a given test level. This is one of the purposes of\n                    test reports\n                 c) Is correct. Providing information about defects is the purpose of a defect\n                    report, not a test report\n                 d) Is not correct. Providing information on testing planned for the next\n                    period is one of the purposes of test reports\n\nQuestion Correct                              Explanation / Rationale                            Learning    K-Level   Number\nNumber Answer                                                                                    Objective                of\n  (#)                                                                                              (LO)                 Points",
    "lo": "FL-5.3.2",
    "kLevel": "K2"
  },
  {
    "set": "D",
    "number": "37",
    "id": "D-37",
    "points": "1 Point",
    "stem": "The user reported a software failure. An engineer from the support team asked the user for the\nsoftware version number where the failure was observed. Based on the version number, the team\nreassembled all the files that made up the release. This later allowed a developer to perform\nanalysis, find the defect, and fix it.\n\nWhich of the following enabled the above activity to be performed by the team?",
    "options": [
      {
        "id": "a",
        "text": "Risk management"
      },
      {
        "id": "b",
        "text": "Test monitoring and control"
      },
      {
        "id": "c",
        "text": "Whole team approach"
      },
      {
        "id": "d",
        "text": "Configuration management"
      }
    ],
    "selectCount": 1,
    "correct": [
      "d"
    ],
    "explanation": "a) Is not correct. Risk management consists of risk analysis and risk\n                    control. Neither of these activities supports the reassembly of the files\n                    that made up the release, because these activities deal with risks, not\n                    with configuration items\n                 b) Is not correct. Test monitoring is concerned with gathering information\n                    about testing. This information is used to assess test progress and to\n                    measure whether the exit criteria or the test tasks associated with the\n                    exit criteria are satisfied, such as meeting the targets for coverage of\n                    product risks, requirements, or other acceptance criteria. Test control\n                    uses the information from test monitoring to provide, in the form of\n                    control directives, guidance and the necessary corrective actions to\n                    achieve the most effective and efficient testing. None of these activities\n                    deal with the management of configuration items\n                 c) Is not correct. The whole team approach builds on the tester’s skill to\n                    work effectively in a team context and to contribute positively to the\n                    team goals. So, it focuses on team-related issues, not on configuration\n                    items\n                 d) Is correct. Configuration management provides a discipline for\n                    identifying, controlling, and tracking work products. Configuration\n                    management keeps a record of changed configuration items when a\n                    new baseline is created. Using configuration management, it is possible\n                    to revert to a previous baseline in order to reproduce previous test\n                    results\n\nQuestion Correct                             Explanation / Rationale                              Learning    K-Level   Number\nNumber Answer                                                                                     Objective                of\n  (#)                                                                                               (LO)                 Points",
    "lo": "FL-5.4.1",
    "kLevel": "K2"
  },
  {
    "set": "D",
    "number": "38",
    "id": "D-38",
    "points": "1 Point",
    "stem": "Consider the following defect report for a Book Lending System.\n\nDefect ID: 001 | Title: Unable to Return a Book                     |\nSeverity: High | Priority:                                          |\nEnvironment: Windows 10, Google Chrome\n\nDescription: When attempting to return a book using the Book Return feature, the system does\nnot register the return and the book remains checked out to the user.\n\nSteps to Reproduce:\nLogin to the Book Lending System as a user who has checked out a book.\nClick on the \"Book Return\" button for the book that has been checked out.\nSystem does not register the return and the book remains checked out.\n\nExpected Result: The book should be returned and no longer appear as checked out to the user.\nActual Result: The book remains checked out to the user and is not registered as returned in the\nsystem.\n\nAttachments: [empty list]\n\nWhich of the following is MOST likely to help the developer reproduce the failure quickly?",
    "options": [
      {
        "id": "a",
        "text": "Adding information about which users and which books the failure affects to the “Description” section"
      },
      {
        "id": "b",
        "text": "Filling in the missing value for the “Priority” field"
      },
      {
        "id": "c",
        "text": "Adding memory dumps and database snapshots taken after each step described in the “Steps to Reproduce” section to the “Attachments” section."
      },
      {
        "id": "d",
        "text": "Repeating the same test case for different environments and writing defect reports for each of them separately"
      }
    ],
    "selectCount": 1,
    "correct": [
      "a"
    ],
    "explanation": "a) Is correct. Adding this information allows the developer to use the same\n                    input data, so it is more likely they will be able to reproduce the failure\n                    quickly and so identify the defect faster\n                 b) Is not correct. Adding the value of Priority will not help in reproducing\n                    the defect itself\n                 c) Is not correct. Although some of this information may be of value,\n                    adding the memory dumps and database snapshots after each step will\n                    be too much, because most of these artefacts will contain useless\n                    information for the developer, and make the defect report less readable.\n                    It will also require the developer to spend a lot of time analyzing this\n                    information, which will lengthen the repair process\n                 d) Is not correct. The question was about helping the developer to\n                    reproduce the failure for a specific environment configuration\n\nQuestion Correct                            Explanation / Rationale                                                    Learning    K-Level   Number\nNumber Answer                                                                                                          Objective                of\n  (#)                                                                                                                    (LO)                 Points",
    "lo": "FL-5.5.1",
    "kLevel": "K3"
  },
  {
    "set": "D",
    "number": "39",
    "id": "D-39",
    "points": "1 Point",
    "stem": "Given the following test tool categories:\n          i.   Collaboration tools\n         ii.   DevOps tools\n        iii.   Management tools\n        iv.    Non-functional testing tools\n         v.    Test design and implementation tools\nTools from which of the categories are MOST likely to facilitate test execution?",
    "options": [
      {
        "id": "a",
        "text": "i, v"
      },
      {
        "id": "b",
        "text": "ii, iv"
      },
      {
        "id": "c",
        "text": "i, iii, v"
      },
      {
        "id": "d",
        "text": "ii, iii, iv"
      }
    ],
    "selectCount": 1,
    "correct": [
      "b"
    ],
    "explanation": "Considering each of the listed tool categories:\n                      i. Collaboration tools – facilitate communication. Communication\n                           does not include the facilitation of test execution\n                      ii. DevOps tools - support the DevOps delivery pipeline, workflow\n                           tracking, automated build process(es) and CI/CD. The delivery\n                           pipeline and CI/CD both include the facilitation of test execution,\n                           such as component testing for CI\n                      iii. Management tools – increase the test process efficiency by\n                           facilitating management of the SDLC, requirements, tests, defects\n                           and configuration. The management of these items does not\n                           include the facilitation of test execution\n                      iv. Non-functional testing tools – allow the tester to perform non-\n                           functional testing that is difficult or impossible to perform\n                           manually. Non-functional testing can include both static testing\n                           and dynamic testing, including test execution\n                      v. Test design and implementation tools – facilitate generation of\n                           test cases, test data and test procedures. The generation of this\n                           testware does not include the facilitation of test execution\n\n                                         Thus:\n                                         a) Is not correct\n                                         b) Is correct. Both DevOps tools (ii) and Non-functional testing tools (iv)\n                                            facilitate test execution\n                                         c) Is not correct\n                                         d) Is not correct\n\nQuestion Correct                             Explanation / Rationale                             Learning    K-Level   Number\nNumber Answer                                                                                    Objective                of\n  (#)                                                                                              (LO)                 Points",
    "lo": "FL-6.1.1",
    "kLevel": "K2"
  },
  {
    "set": "D",
    "number": "40",
    "id": "D-40",
    "points": "1 Point",
    "stem": "Which of the following is MOST likely to be a risk of test automation?",
    "options": [
      {
        "id": "a",
        "text": "The detection of additional high-severity defects"
      },
      {
        "id": "b",
        "text": "Providing measures that are too complicated for humans to derive"
      },
      {
        "id": "c",
        "text": "Incompatibility with the development platform"
      },
      {
        "id": "d",
        "text": "Substantially reduced test execution times"
      }
    ],
    "selectCount": 1,
    "correct": [
      "c"
    ],
    "explanation": "a) Is not correct. The detection of additional high-severity defects would be\n                    a benefit of test automation, rather than a risk\n                 b) Is not correct. The provision of measures that are too complicated for\n                    humans to derive themselves is normally considered to be a benefit of\n                    test automation\n                 c) Is correct. If the test automation is incompatible with the development\n                    platform, then it will not be able to integrate them, and, for instance,\n                    pass test inputs to the test object and receive test results from the test\n                    object\n                 d) Is not correct. Substantially reduced test execution times would normally\n                    be considered a benefit that is provided by test automation",
    "lo": "FL-6.2.1",
    "kLevel": "K1"
  }
];
