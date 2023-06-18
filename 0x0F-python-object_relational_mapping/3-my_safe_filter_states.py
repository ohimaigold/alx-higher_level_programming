#!/usr/bin/python3
"""List states -  Module"""
import MySQLdb
from sys import argv

if __name__ == "__main__":
    db = MySQLdb.connect(
            host='localhost',
            port=3306,
            user=argv[1],
            passwd=argv[2],
            db=argv[3])

    searching = argv[4]
    query = '''SELECT * FROM states WHERE states.name LIKE BINARY %s
        ORDER BY states.id ASC'''
    cursor = db.cursor()
    cursor.execute(query, [searching])
    rows = cursor.fetchall()
    for row in rows:
        print(row)
    cursor.close()
    db.close()
