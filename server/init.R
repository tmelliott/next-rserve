library(Rserve)

wrap.js.fun <- function(s)
{
  if (class(s) != "javascript_function")
    stop("Can only wrap javascript_function s");
  function(...) {
    self.oobMessage(list(s, ...))
  }
}

wrap.r.fun <- Rserve:::ocap

give.first.functions <- function()
{
    list(
        rversion = wrap.r.fun(function() getRversion() |> as.character()),
        load_data = wrap.r.fun(function(url) {
          data <- iNZightTools::smart_read(url)

          list(
            variables = wrap.r.fun(function() names(data)),
            get_data = wrap.r.fun(function() data)
          )
        })
    )
}

####################################################################################################
# make.oc turns a function into an object capability accessible from the remote side

# oc.init must return the first capability accessible to the remote side
oc.init <- function()
{
  wrap.r.fun(give.first.functions)
}
