import Input from "./components/Input/Input";

function App() {
  return (
    <div className="flex h-screen w-full bg-white md:bg-gray-100 items-center justify-center">
      <div className="md:w-6/12 w-full md:h-[500px] bg-white flex items-center justify-center md:rounded-md md:shadow-md">
        <div className="md:w-6/12 w-full px-5">
          <div className="h-full w-full flex items-center justify-start">
            <div className="md:max-w-md mx-auto text-left w-full">
              <h1 className="font-bold text-2xl">Welcome back</h1>
              <p className="text-slate-400 text-sm">
                Welcome back! Please enter your details
              </p>

              <form>
                <Input
                  label="First Name"
                  placeholder="Enter your first name"
                  type="text"
                />
                <Input label="Last Name" placeholder="Enter your last name" />
                <Input label="Email" type="email" />
                <Input label="Password" type="password" />
              </form>
            </div>
          </div>
        </div>
        <div className="w-6/12 h-full hidden md:block">
          <div className="h-full">
            <img
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
              className="h-full w-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
