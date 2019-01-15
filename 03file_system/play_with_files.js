var fs = require('fs');

var pagefile = 'files/page.html';
var newfile = 'files/newfile.txt';
var renamedfile = 'files/renamedfile.txt';

var del_file = function(file, supress_errors)
{
    fs.unlink(file, function(err)
    {
        if (err && !supress_errors)
        {
            console.log('File does not exist: ' + file);
        }
        else if (!err)
        {
            console.log('Deleted file: ' + file);
        }
    });
}

var append_file = function(file, text)
{
    fs.appendFile(file, text, function(err)
    {
        if (err) throw err;
        console.log('Appended to file: ' + file);
    });
}

var overwrite_file = function(file, text)
{
    fs.writeFile(file, text, function(err)
    {
        if (err) throw err;
        console.log('Overwrote file: ' + file);
    });
}

var rename_file = function(oldname, newname)
{
    fs.rename(oldname, newname, function(err)
    {
        if (err) throw err;
        console.log('Renamed file ' + oldname + ' to ' + newname);
    });
}

del_file(newfile, true);
del_file(renamedfile, true);

append_file(newfile, "You have been appeded to\n");
overwrite_file(newfile, "You have been overwritten\n");
rename_file(newfile, renamedfile);

overwrite_file(pagefile, "<html><body><h1>Header</h1><p>Paragraph</p></body>");
