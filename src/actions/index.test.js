const rewire = require("rewire")
const index = rewire("./index")
const loginUserFail = index.__get__("loginUserFail")
const loginUserSuccess = index.__get__("loginUserSuccess")
// @ponicode
describe("index.emailChanged", () => {
    test("0", () => {
        let callFunction = () => {
            index.emailChanged("Foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.emailChanged("foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.emailChanged("Hello, world!")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.emailChanged("This is a Text")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.emailChanged(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.passwordChanged", () => {
    test("0", () => {
        let callFunction = () => {
            index.passwordChanged("Hello, world!")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.passwordChanged("Foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.passwordChanged("foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.passwordChanged("This is a Text")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.passwordChanged(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.loginUser", () => {
    test("0", () => {
        let callFunction = () => {
            index.loginUser({ email: "user1+user2@mycompany.com", password: "$p3onyycat" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.loginUser({ email: "user1+user2@mycompany.com", password: "!Lov3MyPianoPony" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.loginUser({ email: "something@example.com", password: "accessdenied4u" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.loginUser({ email: "TestUpperCase@Example.com", password: "NoWiFi4you" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.loginUser({ email: "email@Google.com", password: "YouarenotAllowed2Use" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index.loginUser({ email: undefined, password: undefined })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("loginUserFail", () => {
    test("0", () => {
        let callFunction = () => {
            loginUserFail(() => 9876)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            loginUserFail(() => "c466a48309794261b64a4f02cfcc3d64")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            loginUserFail(() => "da7588892")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            loginUserFail(() => 12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            loginUserFail(() => "bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            loginUserFail(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("loginUserSuccess", () => {
    test("0", () => {
        let callFunction = () => {
            loginUserSuccess(9876, "user-name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            loginUserSuccess(9876, "username")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            loginUserSuccess("bc23a9d531064583ace8f67dad60f6bb", "user123")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            loginUserSuccess("bc23a9d531064583ace8f67dad60f6bb", "username")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            loginUserSuccess(12345, "user123")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            loginUserSuccess(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.selectLibrary", () => {
    test("0", () => {
        let callFunction = () => {
            index.selectLibrary("user_name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.selectLibrary("username")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.selectLibrary("user123")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.selectLibrary("user-name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.selectLibrary("user name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index.selectLibrary(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.goToMaps", () => {
    test("0", () => {
        let callFunction = () => {
            index.goToMaps()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.openDrawer", () => {
    test("0", () => {
        let callFunction = () => {
            index.openDrawer(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.openDrawer(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.openDrawer(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.closeDrawer", () => {
    test("0", () => {
        let callFunction = () => {
            index.closeDrawer(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.closeDrawer(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.closeDrawer(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.selectImage", () => {
    test("0", () => {
        let callFunction = () => {
            index.selectImage("http://example.com/foo?bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.selectImage("http://backend.userland.com/rss")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.selectImage("b'http://example.com/'")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.selectImage("b'http://example.com/foo?bar'")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.selectImage("http://another.example.com/")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index.selectImage(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.inputHandler", () => {
    test("0", () => {
        let callFunction = () => {
            index.inputHandler("Foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.inputHandler("foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.inputHandler("This is a Text")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.inputHandler("Hello, world!")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.inputHandler(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.checkSavedName", () => {
    test("0", () => {
        let callFunction = () => {
            index.checkSavedName()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.saveName", () => {
    test("0", () => {
        let callFunction = () => {
            index.saveName("Hello, world!")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.saveName("foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.saveName("Foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.saveName("This is a Text")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.saveName(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
