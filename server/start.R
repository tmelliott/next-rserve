system("killall Rserve")
Rserve::Rserve(
    args = c(
        "--RS-conf", "server/rserve.conf",
        "--RS-source", "server/init.R",
        "--vanilla",
        "--no-save",
        "--silent"
    )
)
