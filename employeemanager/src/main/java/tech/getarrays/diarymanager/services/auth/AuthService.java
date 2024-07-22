package tech.getarrays.diarymanager.services.auth;

import tech.getarrays.diarymanager.dto.SignupDTO;
import tech.getarrays.diarymanager.dto.UserDTO;

public interface AuthService {
    UserDTO createUser(SignupDTO signupDTO);
}
