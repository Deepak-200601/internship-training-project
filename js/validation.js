function validite_password(password)
{
    // check the length of the password
    var n = password.length;
    //check whether the password contains atleast 1 uppercase 1 lowercase 1digit
    if(n<6 || password.search(/[A-Z]/)<0 || password.search(/[a-z]/)<0 || password.search(/[0-9]/)<0 )
    {
        return false;
    }
    return true;

    if (n  > 6 )
    {
        return true;
    }
    return false;
}