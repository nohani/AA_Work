require 'pg'

def execute(sql)
  conn = PG::Connection.open(:dbname => 'sqlzoo', :port => "5555")
  query_result = conn.exec(sql).values
  conn.close

  query_result
end