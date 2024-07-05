<div className="card bg-white shadow-md">
      <header className="card-header bg-gray-800 text-white py-3 px-4">
        <p className="card-header-title">
          <span className="icon">
            <i className="mdi mdi-account-circle" />
          </span>
          Edit Profile
        </p>
      </header>
      <div className="card-content py-4 px-6">
        <form>
          <div className="field mb-4">
            <label className="label">Avatar</label>
            <div className="control">
              <label className="upload control flex items-center justify-center bg-gray-200 text-gray-700 py-2 px-4 rounded-md cursor-pointer">
                Upload
                <input type="file" className="hidden" />
              </label>
            </div>
          </div>
          <hr className="my-4" />
          <div className="field mb-4">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                autoComplete="on"
                name="name"
                defaultValue="John Doe"
                className="input"
                required=""
              />
              <p className="help">Required. Your name</p>
            </div>
          </div>
          <div className="field mb-4">
            <label className="label">E-mail</label>
            <div className="control">
              <input
                type="email"
                autoComplete="on"
                name="email"
                defaultValue="user@example.com"
                className="input"
                required=""
              />
              <p className="help">Required. Your e-mail</p>
            </div>
          </div>
          <hr className="my-4" />
          <div className="field">
            <div className="control">
              <button type="submit" className="button bg-green-500 text-white hover:bg-green-600">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>