
module.exports = {
  src_folders : ["tests"],
  output_folder : "reports",

  webdriver: {
    start_process: true,
    server_path: "node_modules/chromedriver/lib/chromedriver/chromedriver.exe",
    port: 4444,
    host: "localhost"
  },

  test_settings: {
    default: {    
      desiredCapabilities: {
        browserName: 'chrome'
      }
    }
  }
};
